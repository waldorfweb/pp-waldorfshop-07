<template>
    <div itemscope itemtype="http://schema.org/Thing" v-if="showGallery()" class="text-center">
        <div :id="'carousel'+_uid" class="carousel slide" data-interval="false">
            <ol class="carousel-indicators" v-if="showDots">
                <li v-for="(image, index) in singleImages" :data-target="'#carousel'+_uid" :data-slide-to="index" :class="{ active: index === 0 }"></li>
            </ol>
            <div class="carousel-inner text-center">
                <div v-for="(image, index) in singleImages" class="carousel-item" :class="{ active: index === 0 }">
                    <img class="img-fluid"
                         :src="image.url"
                         :alt="getAltText(image)"
                         v-if="index === 0">
                    <img class="img-fluid defer-load"
                         :data-src="image.url"
                         :alt="getAltText(image)"
                         v-else>
                </div>
            </div>
        </div>

        <div v-if="showThumbs" class="container carousel-thumbnails">
            <div class="row row-cols-6">
                <a v-for="(imagePreview, index) in carouselImages" class="col pt-2" :href="'#carousel'+_uid" :data-target="'#carousel'+_uid" :data-slide-to="index" :title="getImageName(imagePreview)">
                    <img class="img-fluid defer-load"
                         :data-src="imagePreview.url"
                         :alt="getAltText(imagePreview)">
                </a>
            </div>
        </div>
    </div>
    <img
        v-else
        class="img-fluid"
        :src="singleImages[0].url"
        :alt="getAltText(singleImages[0].url)"
        :title="getImageName(singleImages[0].url)"
        loading="eager"
    >
</template>

<script>

export default {
    name: "item-image-carousel",

    props: {
        maxQuantity:
        {
            type: Number,
            default: 10
        },
        showThumbs:
        {
            type: Boolean,
            default: true
        },
        showDots:
        {
            type: Boolean,
            default: true
        },
        showNav:
        {
            type: Boolean,
            default: false
        },
        animationStyle:
        {
            type: String,
            default: "standard"
        }
    },

    inject: {
        itemId: {
            default: null
        }
    },

    data()
    {
        return {
            imageObserver: null
        }
    },

    computed:
    {
        currentVariation()
        {
            return this.$store.getters[`${this.itemId}/currentItemVariation`]
        },

        carouselImages()
        {
            const carouselImages = this.$options.filters.itemImages(
                this.currentVariation.images,
                "url"
            ).slice(0, this.maxQuantity);

            carouselImages.forEach((image) => {
                image.url = image.url.replace("https://cdn02.plentymarkets.com/rm2ukznxe8l9/", "https://waldorfshop.sirv.com/") + "?scale.width=100&scale.height=100";
            });

            return carouselImages;
        },

        singleImages()
        {
            const singleImages = this.$options.filters.itemImages(
                this.currentVariation.images,
                "url"
            ).slice(0, this.maxQuantity);

            singleImages.forEach((image) => {
               image.url = image.url.replace("https://cdn02.plentymarkets.com/rm2ukznxe8l9/", "https://waldorfshop.sirv.com/") + "?scale.width=700&scale.height=700";
            });

            return singleImages;
        }
    },

    watch: {
        currentVariation:
            {
                handler(val, oldVal)
                {
                    if (val !== oldVal)
                    {
                        this.$nextTick(() => {
                            this.registerElementsForIntersection();
                        });
                    }
                },
                deep: true
            }
    },

    mounted()
    {
        this.$nextTick(() =>
        {
            this.initCarousel();
        });
    },

    methods:
    {
        showImages(parentElement)
        {
            document.querySelectorAll(parentElement + ' .defer-load').forEach((elem) => {
                const dataSrc = elem.getAttribute("data-src");

                if (dataSrc && dataSrc !== elem.src) {
                    elem.src = dataSrc;
                }
            });
        },

        registerElementsForIntersection()
        {
            if (this.showGallery()) {
                document.querySelectorAll("#carousel" + this._uid + " .carousel-thumbnails").forEach((elem) => {
                    this.imageObserver.observe(elem);
                });

                $("#carousel" + this._uid).on('slide.bs.carousel', () => {
                    this.showImages("#carousel" + this._uid);
                });
            }
        },

        initCarousel()
        {
            if ("IntersectionObserver" in window) {
                this.imageObserver = new IntersectionObserver((entries, imageObserver) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting)
                        {
                            this.showImages(entry.target);
                            imageObserver.unobserve(entry.target);
                        }
                    });
                });
                this.registerElementsForIntersection();
            }
            else {
                if (this.showGallery()) {
                    console.log("Your Browser is too old!");
                    const images = this.$el.getElementsByClassName('defer-load');
                    let i;
                    for (i = 0; i < x.length; i++) {
                        images[i].src = images[i].getAttribute("data-src");
                        images[i].removeAttribute("data-src");
                    }
                }
            }
            $('#carousel'+this._uid).carousel();
        },

        getImageCount()
        {
            return this.carouselImages.length > this.maxQuantity ? this.maxQuantity : this.carouselImages.length;
        },

        getAltText(image)
        {
            let altText = image && image.alternate ? image.alternate : this.$options.filters.itemName(this.currentVariation);
            if (this.currentVariation.attributes.length > 0) {
                altText = altText + ' ' + this.currentVariation.attributes[0].value.names.name
            }
            return altText;
        },

        getImageName(image)
        {
            let imageName =  image && image.name ? image.name : this.$options.filters.itemName(this.currentVariation);
            if (this.currentVariation.attributes.length > 0) {
                imageName = imageName + ' ' + this.currentVariation.attributes[0].value.names.name
            }
            return imageName;
        },

        showGallery()
        {
            return (this.getImageCount() > 1);
        }
    }
}
</script>
