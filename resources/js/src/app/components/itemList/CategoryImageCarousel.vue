<template>
    <div v-if="$data.$_enableCarousel" :id="'carousel'+_uid" class="carousel slide" data-interval="false">
        <ol class="carousel-indicators" v-if="showDots">
            <li v-for="(imageUrl, index) in imageUrls" :data-target="'#carousel'+_uid" :data-slide-to="index" :class="{ active: index === 0 }"></li>
        </ol>
        <div class="carousel-inner">
            <div v-for="(imageUrl, index) in imageUrls" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                <a :href="itemUrl" :title="getTitleText(imageUrl)">
                  <lazy-img
                    :image-url="imageUrl.url"
                    :alt="getAltText(imageUrl)"
                    :title="getTitleText(imageUrl)"
                    :ref="{ 'itemLazyImage' : index === 0 }"
                    picture-class="img-fluid"
                    role="option" />
                </a>
            </div>
        </div>
        <a class="carousel-control-prev" :href="'#carousel'+_uid" role="button" data-slide="prev" v-if="showNav">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" :href="'#carousel'+_uid" role="button" data-slide="next" v-if="showNav">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <a v-else :href="itemUrl" :title="getTitleText(imageUrls[0])">
      <lazy-img
        :ref="{ 'itemLazyImage': !disableLazyLoad }"
        :image-url="imageOrItemImage"
        :alt="getAltText(imageUrls[0])"
        :title="getTitleText(imageUrls[0])"
        picture-class="img-fluid" />
    </a>
</template>

<script>

export default {

    name: "category-image-carousel",

    props: {
        imageUrlsData:
        {
            type: Array
        },
        itemUrl:
        {
            type: String
        },
        alt:
        {
            type: String
        },
        title:
        {
            type: String
        },
        showDots:
        {
            type: Boolean,
            default: App.config.item.categoryShowDots
        },
        showNav:
        {
            type: Boolean,
            default: App.config.item.categoryShowNav
        },
        disableLazyLoad: {
            type: Boolean,
            default: false
        },
        disableCarouselOnMobile:
        {
            type: Boolean
        },
        enableCarousel:
        {
            type: Boolean
        },
        template:
        {
            type: String
        }
    },

    data()
    {
        return {
            $_enableCarousel: false
        };
    },

    computed:
    {
        imageUrls()
        {
            return this.imageUrlsData;
        },
        imageOrItemImage()
        {
            return this.imageUrls.length ? this.imageUrls[0].url : this.itemImage;
        }
    },

    mounted()
    {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const shouldCarouselBeEnabled = this.enableCarousel && this.imageUrls.length > 1;

        this.$data.$_enableCarousel = this.disableCarouselOnMobile && isMobile ? false : shouldCarouselBeEnabled;
    },

    methods:
    {
        getAltText(image)
        {
            const alt = image && image.alternate ? image.alternate : this.alt;

            return alt;
        },

        getTitleText(image)
        {
            const title = image && image.name ? image.name : this.title;

            return title;
        }
    }
}
</script>
