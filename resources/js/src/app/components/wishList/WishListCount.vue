<template v-slot:default="{ breakpoint }">
    <a class="nav-link" :href="urlWishList" rel="nofollow" :aria-label="$translate('Ceres::Template.wishList')" v-if="breakpoint === 'md'">
        <img class="mx-auto d-block" src="https://cdn02.plentymarkets.com/rm2ukznxe8l9/frontend/Layout/icons2023/ws_icon_merkzettel.svg">
        <span class="badge badge-primary badge-pill position-absolute basket-quantity-indicator wishlist-quantity-indicator">{{ wishListCount }}</span>
        <span class="d-none d-sm-block">{{ $translate('Ceres::Template.wishList') }}</span>
    </a>
    <a class="nav-link" :href="urlWishList" rel="nofollow" :aria-label="$translate('Ceres::Template.wishList')" v-else>
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
            case 'xs': return 'xs-wish'
            case 'sm': return 'sm-wish'
            case 'md': return 'md-wish'
            case 'lg': return 'lg-wish'
            case 'xl': return 'xl-wish'
            }
        }
    }

//
data() {
    return {
      value: 0,
      // add a new state
      breakpoint: ''
    }
  },
  // add watcher for value
  watch: {
    value: {
      // need to set immediate as true to trigger the handler
      // immediately after the start of the observation
      immediate: true,
      handler: 'setBreakpoint'
    }
  },
  // ...
  methods: {
    // ...
    // I use small-to-large screen approach here
    // but you can change the logic however you like it
    setBreakpoint(value) {
      let breakpoint = 'xs'

      if (value >= 576) {
        breakpoint = 'sm'
      } else if (value >= 756) {
        breakpoint = 'md'
      } else if (value >= 1024) {
        breakpoint = 'lg'
      } else if (value >= 1280) {
        breakpoint = 'xl'
      }

      this.breakpoint = breakpoint
    }
  },
  render() {
    return this.$scopedSlots.default({
      value: this.value,
      // return the breakpoint state as slot props
      breakpoint: this.breakpoint
    })
  }


}


</script>
