<template>
    <div v-if="$slots.items && $slots.items.length > itemsPerPage" :id="'carousel'+_uid" class="carousel slide" data-interval="false">
        <ol class="carousel-indicators d-md-none">
            <li v-for="(item, index) in $slots.items" v-if="index % itemsPerPage === 0" :data-target="'#carousel'+_uid" :data-slide-to="Math.floor(index/itemsPerPage)" :class="{ active: index === 0 }"></li>
        </ol>

        <div class="carousel-inner">
            <div v-for="n in Math.ceil($slots.items.length / itemsPerPage)" class="carousel-item" :class="{ active: n === 1 }">
                <ul class="row product-list mx-n2">
                    <li v-for="(item, index) in $slots.items" v-if="(index >= ((n - 1) * itemsPerPage)) && (index < (n * itemsPerPage))" :class="'px-2 '+columnWidths">
                        <slot-component :vnode="item"/>
                    </li>
                </ul>
            </div>
        </div>

        <a class="carousel-control-prev d-none d-md-block" :href="'#carousel'+_uid" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next d-none d-md-block" :href="'#carousel'+_uid" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <ul class="row product-list mx-n2" v-else>
        <li :class="'px-2 '+columnWidths" v-for="item in $slots.items">
            <slot-component :vnode="item"/>
        </li>
    </ul>
</template>

<script>

export default {
    components: {
        SlotComponent: {
            functional: true,
            render: (createElement, context) => context.data.attrs.vnode
        }
    },

    props: {
        itemsPerPage: {
            type: Number,
            default: 4
        }
    },

    computed:
    {
        columnWidths()
        {
            const itemsPerPage = Math.min(Math.max(this.itemsPerPage, 1), 4);

            let widths = 'col-12';

            if (itemsPerPage === 2) {
                widths = 'col-6';
            }
            else if (itemsPerPage === 3) {
                widths = 'col-6 col-md-4';
            }
            else if (itemsPerPage === 4) {
                widths = 'col-6 col-md-3';
            }

            return widths;
        }
    }
}
</script>
