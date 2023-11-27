<template>
    <article class="cmp cmp-product-thumb" :data-testing="item.variation.id">
        <div :class="paddingClasses" :style="paddingInlineStyles">
            <div class="thumb-image">
                <div class="prop-1-1 cimage">                    
                    
                    <slot name="item-image">
                        <a :href="item | itemURL(urlWithVariationId)" class="thumb-image-inner" :class="{ 'stretched-link': $ceres.config.global.shippingCostsCategoryId == 0 }">
                        <lazy-img picture-class="img-fluid" :image-url="item.images | itemImages(imageUrlAccessor) | itemImage" :alt="item | itemName"></lazy-img>
                    </a>
                    </slot>
                    
                </div>
            </div>

            <!-- STORE SPECIALS -->
            <slot name="store-special">
                <item-store-special v-if="storeSpecial || item.variation.bundleType === 'bundle' || item.item.itemType === 'set'"
                                    :store-special="storeSpecial"
                                    :recommended-retail-price="item.prices.rrp"
                                    :variation-retail-price="item.prices.default"
                                    :special-offer-price="item.prices.specialOffer"
                                    :decimal-count="decimalCount"
                                    :bundle-type="item.variation.bundleType"
                                    :item-type="item.item.itemType">
                </item-store-special>
            </slot>
            <!-- ./STORE SPECIALS -->

            <!-- ITEM DETAILS -->
            <slot name="item-details">
                <div class="thumb-content">
                    <a :href="item | itemURL(urlWithVariationId)" class="thumb-title small" :class="{ 'stretched-link': $ceres.config.global.shippingCostsCategoryId == 0 }">
                        {{ item | itemName }}
                        <!-- <span v-for="attribute in item.groupedAttributes">{{ "Ceres::Template.itemGroupedAttribute" | translate(attribute) }}</span>-->

                    </a>

                    <div v-if="!isBook"  class="item-details__book-details">

                        <span v-if="item.texts.name3" class="item-details__subtitle">
                            {{ item.texts.name3 }}
                        </span>
                        <span v-if="item.texts.name2" class="item-details__author">
                            {{ item.texts.name2 }}
                        </span>

                        <span v-if="item.texts.shortDescription" class="item-details__short">
                            {{ item.texts.shortDescription }}
                        </span>

                    </div>

                    <div class="thumb-meta mt-2">
                        <slot name="before-prices"></slot>
                    </div>

                    <slot name="after-prices"></slot>

                    <div v-if="isBook" class="item-details__book-btn">
                        <button type="button" class="btn btn-primary btn-appearance item-details__showItem" @click="directToItem()">
                            {{ $translate("Ceres::Template.itemShowItem") }}
                        </button>
                    </div>
                </div>
            </slot>
            <!-- ./ITEM DETAILS  -->
        </div>
    </article>
</template>

<script>
import ItemStoreSpecial from "./ItemStoreSpecial.vue";
import {getSlotData} from "../../helper/getSlotData";

export default {
    components: {
        ItemStoreSpecial
    },

    props: {
        decimalCount:
        {
            type: Number,
            default: 0
        },
        imageUrlAccessor:
        {
            type: String,
            default: "urlMiddle"
        },
        itemData:
        {
            type: Object
        },
        paddingClasses:
        {
            type: String,
            default: null
        },
        paddingInlineStyles:
        {
            type: String,
            default: null
        },
        forceUrlWithVariationId:
        {
            type: Boolean,
            default: false
        }
    },

    jsonDataFields: [
        "itemDataRef"
    ],

    computed:
    {
        item()
        {
            return this.itemData || this.itemSlotData || this.itemDataRef;
        },

        itemSlotData: getSlotData('item-data'),

        /**
         * exluce categories
         */
        isBook() {
            if(this.$store.state.navigation.currentCategory != null){
                return [].includes(this.$store.state.navigation.currentCategory.id);
            }
            return false
        },

        /**
         * returns itemData.item.storeSpecial
         */
        storeSpecial()
        {
            return this.item.item.storeSpecial;
        },

        /**
         * returns itemData.texts
         */
        texts()
        {
            return this.item.texts;
        },

        urlWithVariationId()
        {
            return !this.$ceres.config.item.showPleaseSelect || this.$ceres.initialPleaseSelect == 0 || this.forceUrlWithVariationId;
        },
    }
}
</script>
