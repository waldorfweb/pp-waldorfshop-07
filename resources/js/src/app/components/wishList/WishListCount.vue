<template>
    <a class="nav-link" :href="urlWishList" rel="nofollow" :aria-label="$translate('Ceres::Template.wishList')">
        <img class="mx-auto d-block" src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Layout/icons2023/ws_icon_merkzettel.svg">
        <span class="badge badge-primary badge-pill position-absolute basket-quantity-indicator wishlist-quantity-indicator">{{ wishListCount }}</span>
        <span class="d-none d-sm-block">{{ $translate('Ceres::Template.wishList') }}</span>
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
        },
        cssclass() {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return xs-wish
            case 'sm': return sm-wish
            case 'md': return md-wish
            case 'lg': return lg-wish
            case 'xl': return xl-wish
            }
        }
    }
}
</script>
