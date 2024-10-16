"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_item_ItemImageCarousel_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "item-image-carousel",
  props: {
    maxQuantity: {
      type: Number,
      default: 10
    },
    imageUrlAccessor: {
      type: String,
      default: "url"
    },
    showThumbs: {
      type: Boolean,
      default: true
    },
    showDots: {
      type: Boolean,
      default: true
    },
    showNav: {
      type: Boolean,
      default: false
    },
    animationStyle: {
      type: String,
      default: "standard"
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  data() {
    return {
      imageObserver: null,
      id: null
    };
  },
  computed: {
    currentVariation() {
      return this.$store.getters[`${this.itemId}/currentItemVariation`];
    },
    carouselImages() {
      return this.$options.filters.itemImages(this.currentVariation.images, "urlPreview").slice(0, this.maxQuantity);
    },
    singleImages() {
      return this.$options.filters.itemImages(this.currentVariation.images, this.imageUrlAccessor).slice(0, this.maxQuantity);
    }
  },
  mounted() {
    this.id = this._uid;
    this.$nextTick(() => {
      this.initCarousel();
    });
  },
  methods: {
    initCarousel() {
      $('#carousel' + this.id).carousel();
    },
    getImageCount() {
      return this.carouselImages.length > this.maxQuantity ? this.maxQuantity : this.carouselImages.length;
    },
    getAltText(image) {
      let altText = image && image.alternate ? image.alternate : this.$options.filters.itemName(this.currentVariation);
      if (this.currentVariation.attributes.length > 0) {
        altText = altText + ' ' + this.currentVariation.attributes[0].value.names.name;
      }
      return altText;
    },
    getImageName(image) {
      let imageName = image && image.name ? image.name : this.$options.filters.itemName(this.currentVariation);
      if (this.currentVariation.attributes.length > 0) {
        imageName = imageName + ' ' + this.currentVariation.attributes[0].value.names.name;
      }
      return imageName;
    },
    showGallery() {
      return this.getImageCount() > 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.showGallery() ? _c("div", {
    staticClass: "text-center",
    attrs: {
      itemscope: "",
      itemtype: "http://schema.org/Thing",
      id: "carousel-wrapper" + _vm.id
    }
  }, [_c("div", {
    staticClass: "carousel slide",
    attrs: {
      id: "carousel" + _vm.id,
      "data-interval": "false"
    }
  }, [_vm.showDots ? _c("ol", {
    staticClass: "carousel-indicators"
  }, _vm._l(_vm.singleImages, function (image, index) {
    return _c("li", {
      class: {
        active: index === 0
      },
      attrs: {
        "data-target": "#carousel" + _vm.id,
        "data-slide-to": index
      }
    });
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "carousel-inner text-center"
  }, _vm._l(_vm.singleImages, function (image, index) {
    return _c("div", {
      staticClass: "carousel-item prop-1-1",
      class: {
        active: index === 0
      }
    }, [_c("div", {
      staticClass: "position-absolute w-100 h-100"
    }, [index === 0 ? _c("img", {
      staticClass: "mw-100 mh-100",
      attrs: {
        alt: _vm.getAltText(image),
        src: image.url,
        title: _vm.getImageName(image),
        fetchpriority: "high",
        width: "image.width",
        height: "image.height"
      }
    }) : _c("img", {
      staticClass: "mw-100 mh-100",
      attrs: {
        alt: _vm.getAltText(image),
        src: image.url,
        title: _vm.getImageName(image),
        loading: "lazy",
        decoding: "async",
        width: "image.width",
        height: "image.height"
      }
    })])]);
  }), 0), _vm._v(" "), _vm.showNav && _vm.singleImages.length > 1 ? _c("a", {
    staticClass: "carousel-control-prev",
    attrs: {
      href: "#carousel" + _vm.id,
      role: "button",
      "data-slide": "prev"
    }
  }, [_c("span", {
    staticClass: "carousel-control-prev-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Previous")])]) : _vm._e(), _vm._v(" "), _vm.showNav && _vm.singleImages.length > 1 ? _c("a", {
    staticClass: "carousel-control-next",
    attrs: {
      href: "#carousel" + _vm.id,
      role: "button",
      "data-slide": "next"
    }
  }, [_c("span", {
    staticClass: "carousel-control-next-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Next")])]) : _vm._e()]), _vm._v(" "), _vm.showThumbs ? _c("div", {
    staticClass: "carousel-thumbnails"
  }, [_c("div", {
    staticClass: "row mx-n2"
  }, _vm._l(_vm.carouselImages, function (imagePreview, index) {
    return _c("div", {
      staticClass: "col col-lg-1 col-2 pt-2 px-2"
    }, [_c("a", {
      staticClass: "d-block prop-1-1",
      attrs: {
        href: "#carousel" + _vm.id,
        "data-target": "#carousel" + _vm.id,
        "data-slide-to": index,
        title: _vm.getImageName(imagePreview)
      }
    }, [_c("span", {
      staticClass: "position-absolute d-block w-100 h-100 px-2"
    }, [_c("img", {
      staticClass: "mw-100 mh-100 border",
      attrs: {
        alt: _vm.getAltText(imagePreview),
        src: imagePreview.url + ".avif",
        title: _vm.getImageName(imagePreview),
        loading: "lazy",
        decoding: "async"
      }
    })])])]);
  }), 0)]) : _vm._e()]) : _c("div", {
    staticClass: "prop-1-1"
  }, [_c("img", {
    staticClass: "position-absolute w-100 h-100",
    attrs: {
      alt: _vm.getAltText(_vm.singleImages[0]),
      src: _vm.singleImages[0].url + ".avif",
      title: _vm.getImageName(_vm.singleImages[0])
    }
  })]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/ItemImageCarousel.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemImageCarousel.vue ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemImageCarousel_vue_vue_type_template_id_5285279e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemImageCarousel.vue?vue&type=template&id=5285279e */ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e");
/* harmony import */ var _ItemImageCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemImageCarousel.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemImageCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemImageCarousel_vue_vue_type_template_id_5285279e__WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemImageCarousel_vue_vue_type_template_id_5285279e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/ItemImageCarousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemImageCarousel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_template_id_5285279e__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_template_id_5285279e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemImageCarousel_vue_vue_type_template_id_5285279e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemImageCarousel.vue?vue&type=template&id=5285279e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemImageCarousel.vue?vue&type=template&id=5285279e");


/***/ })

}]);
//# sourceMappingURL=ceres-client-resources_js_src_app_components_item_ItemImageCarousel_vue.js.map