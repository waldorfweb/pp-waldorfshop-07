<template>
    <div itemscope itemtype="http://schema.org/Thing" v-if="showGallery()" class="text-center" :id="'carousel-wrapper'+id">
        <div :id="'carousel'+id" class="carousel slide" data-interval="false">
            <ol class="carousel-indicators" v-if="showDots">
                <li v-for="(image, index) in singleImages" :data-target="'#carousel'+id" :data-slide-to="index" :class="{ active: index === 0 }"></li>
            </ol>
            <div class="carousel-inner text-center">
                <div v-for="(image, index) in singleImages" class="carousel-item prop-1-1" :class="{ active: index === 0 }">
                    <div class="position-absolute w-100 h-100">
                        <lazy-img
                          :alt="getAltText(image)"
                          :image-url="image.url"
                          :title="getImageName(image)"
                          picture-class="mw-100 mh-100" />
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" :href="'#carousel'+id" role="button" data-slide="prev" v-if="showNav && singleImages.length > 1">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" :href="'#carousel'+id" role="button" data-slide="next" v-if="showNav && singleImages.length > 1">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div v-if="showThumbs" class="carousel-thumbnails">
            <div class="row mx-n2">
                <div class="col col-lg-1 col-2 pt-2 px-2" v-for="(imagePreview, index) in carouselImages">
                    <a class="d-block prop-1-1" :href="'#carousel'+id" :data-target="'#carousel'+id" :data-slide-to="index" :title="getImageName(imagePreview)">
                        <span class="position-absolute d-block w-100 h-100 px-2">
                            <lazy-img
                              :alt="getAltText(imagePreview)"
                              :image-url="imagePreview.url"
                              :title="getImageName(imagePreview)"
                              picture-class="mw-100 mh-100 border" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="prop-1-1">
        <lazy-img
            :alt="getAltText(singleImages[0].url)"
            :image-url="singleImages[0].url"
            :title="getImageName(singleImages[0].url)"
            picture-class="position-absolute w-100 h-100" />
    </div>
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
        imageUrlAccessor:
        {
            type: String,
            default: "url"
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
            imageObserver: null,
            id: null
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
            return this.$options.filters.itemImages(
                    this.currentVariation.images,
                    "urlPreview"
                ).slice(0, this.maxQuantity);
        },

        singleImages()
        {
            return this.$options.filters.itemImages(
                    this.currentVariation.images,
                    this.imageUrlAccessor
                ).slice(0, this.maxQuantity);
        }
    },

    mounted()
    {
        this.id = this._uid;

        this.$nextTick(() =>
        {
            this.initCarousel();
        });
    },

    methods:
    {
        initCarousel()
        {
            $('#carousel' + this.id).carousel();
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
