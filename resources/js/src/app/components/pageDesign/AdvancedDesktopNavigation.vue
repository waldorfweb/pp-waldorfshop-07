<template>
    <ul data-level="1" class="collapse adm shadow">
        <li :id="'desktop-menu' + categoryId">
            <loading-animation></loading-animation>
        </li>
    </ul>
</template>

<script>

import {get} from "../../services/ApiService";
import Vue from "vue";

export default {
    name: "advanced-desktop-navigation",
    props: {
        categoryId: {
            type: Number
        },

    },

    data()
    {
        return {
            intersectionObserver: null
        }
    },

    mounted()
    {
        this.$nextTick(() =>
        {
            this.initMegaMenu();
        });
    },

    methods:
    {
        initMegaMenu()
        {
            this.intersectionObserver = new IntersectionObserver((entries, intersectionObserver) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting)
                    {
                        this.loadMegaMenuContent(entry.target);
                        intersectionObserver.unobserve(entry.target);
                    }
                });
            });

            this.intersectionObserver.observe(document.getElementById('desktop-menu' + this.categoryId));
        },

        loadMegaMenuContent(element) {
            get("/wd/categorysbc/"+this.categoryId, {}, { dataType: "html", headers: { "Accept": "text/html; charset=utf-8" } })
                .done(response =>
                {
                    element.innerHTML = response;
                    new Vue({
                        el: element, data: "", store: window.ceresStore
                    });
                });
        }
    }
}
</script>
