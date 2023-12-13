<template v-slot:default="{ value }">
    <a class="nav-link" :href="urlWishList" rel="nofollow" :aria-label="$translate('Ceres::Template.wishList')" v-if="value > 992">
        <img class="mx-auto d-block" src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Layout/icons2023/ws_icon_merkzettel.svg">
        <span class="badge badge-primary badge-pill position-absolute basket-quantity-indicator wishlist-quantity-indicator">{{ wishListCount }}</span>
        <span class="d-none d-sm-block">{{ $translate('Ceres::Template.wishList') }}</span>
    </a>
    <a class="d-block mobile-wunschliste" :href="urlWishList" style="width:50px" :aria-label="$translate('Ceres::Template.wishList')" v-else>
        <img class="d-block" src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Layout/icons2023/ws_icon_merkzettel.svg" style="height: 43px">
        <span class="badge badge-primary badge-pill position-absolute basket-quantity-indicator wishlist-quantity-indicator">{{ wishListCount }}</span>
    </a>
</template>

<script>
export default {
    computed:
    {
        wishListCount()
        {
            return this.$store.getters.wishListCount;
        },

        urlWishList()
        {
            return App.urls.wishList;
        }
    },
    // Beginn Data Value Viewport
    data() {
        return {
        value: 0
        }
    },
    mounted() {
        // we create a methods for this part so that
        // we can reuse it inside of the listener
        this.setValue()
        this.setListener()
    },
    methods: {
        setValue() {
        this.value = window.innerWidth
        },
        setListener() {
        let timeout
        // because resizing event can be quite an intensive process
        // we use requestAnimationFrame so that it won't block the browser's rendering cycle
        window.addEventListener('resize', () => {
            if (timeout) {
            window.cancelAnimationFrame(timeout)
            }
            timeout = window.requestAnimationFrame(() => {
            this.setValue()
            })
        })
        }
    }
    
}


</script>
