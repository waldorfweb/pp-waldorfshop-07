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
                         :loading="{ eager: index === 0, lazy: index > 0 }">
                </div>
            </div>
            <a class="carousel-control-prev" :href="'#carousel'+_uid" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#carousel'+_uid" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div v-if="showThumbs" class="container carousel-thumbnails">
            <div class="row row-cols-6">
                <a v-for="(imagePreview, index) in carouselImages" class="col pt-2" :href="'#carousel'+_uid" :data-target="'#carousel'+_uid" :data-slide-to="index" :title="getImageName(imagePreview)">
                    <img class="img-fluid"
                         :src="imagePreview.url"
                         :alt="getAltText(imagePreview)"
                         loading="lazy">
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

    mounted()
    {
        this.$nextTick(() =>
        {
            this.initCarousel();
        });
    },

    methods:
    {
        initCarousel()
        {
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
