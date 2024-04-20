<template>
    <div v-if="showGallery()" class="text-center" :id="'carousel-wrapper'+id">
        <div :id="'carousel'+id" class="carousel slide" data-interval="false">
            <ol class="carousel-indicators d-md-none">
                <li v-for="(item, index) in $slots.items" v-if="index % itemsPerPage === 0" :data-target="'#carousel'+id" :data-slide-to="Math.floor(index/itemsPerPage)" :class="{ active: index === 0 }"></li>
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

            <a class="carousel-control-prev d-none d-md-flex align-items-center" :href="'#carousel'+id" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-white rounded-cicle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next d-none d-md-flex align-items-center" :href="'#carousel'+id" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
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

    data()
    {
        return {
          imageObserver: null,
          id: null
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
    },

    mounted()
    {
        this.id = this._uid;

        // this.$nextTick(() =>
        // {
            this.initCarousel();
        // });
    },

    methods:
    {
        showImages(parentElement)
        {
            parentElement.querySelectorAll(".defer-load").forEach((elem) => {
                const dataSrc = elem.getAttribute("data-src");

                if (dataSrc && dataSrc !== elem.src) {
                    elem.src = dataSrc;
                }
            });
        },

        registerElementsForIntersection()
        {
            if (this.showGallery()) {
              $("#carousel" + this.id).on('slide.bs.carousel', () => {
                  this.showImages(document.querySelector("#carousel" + this.id));
              });
            }
        },

        initCarousel()
        {
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
            $('#carousel' + this.id).carousel();
        },

        showGallery()
        {
            return this.$slots.items && this.$slots.items.length > this.itemsPerPage;
        }
    }
}
</script>
