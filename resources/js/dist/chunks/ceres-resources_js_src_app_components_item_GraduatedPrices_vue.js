"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_item_GraduatedPrices_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "graduated-prices",
  props: {
    paddingClasses: {
      type: String
    },
    paddingInlineStyles: {
      type: String
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    graduatedPrices() {
      const currentVariation = this.$store.getters[`${this.itemId}/currentItemVariation`];
      let prices = currentVariation && currentVariation.prices.graduatedPrices;
      const minQuantity = currentVariation && currentVariation.variation.minimumOrderQuantity;
      prices = prices.filter(price => price.minimumOrderQuantity > minQuantity);
      return [...prices].sort((priceA, priceB) => {
        return priceA.minimumOrderQuantity - priceB.minimumOrderQuantity;
      });
    },
    showBasePrice() {
      const currentVariation = this.$store.getters[`${this.itemId}/currentItemVariation`];
      const mayShowUnitPrice = currentVariation.variation.mayShowUnitPrice;
      const isSinglePiece = currentVariation.unit && currentVariation.unit.content === 1 && currentVariation.unit.unitOfMeasurement === "C62";
      return mayShowUnitPrice && !isSinglePiece;
    },
    activeGraduationIndex() {
      const prices = this.graduatedPrices.filter(price => this.variationOrderQuantity >= price.minimumOrderQuantity);
      if (!prices.length) {
        return -1;
      }
      const price = prices.reduce((prev, current) => prev.minimumOrderQuantity > current.minimumOrderQuantity ? prev : current);
      return this.graduatedPrices.indexOf(price);
    },
    variationOrderQuantity() {
      return this.$store.state.items[this.itemId] && this.$store.state.items[this.itemId].variationOrderQuantity;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.graduatedPrices[0] ? _c("div", [_c("b", [_vm._v(_vm._s(_vm.$translate("Ceres::Template.singleItemGraduatedPrices")) + ":")]), _vm._v(" "), _c("table", {
    staticClass: "graduated-prices-table text-muted"
  }, [_c("tbody", [_vm._l(_vm.graduatedPrices, function (price, index) {
    return [_c("tr", [_c("td", {
      class: _vm.paddingClasses,
      style: _vm.paddingInlineStyles
    }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.singleItemMinimumQuantity")) + " " + _vm._s(price.minimumOrderQuantity))]), _vm._v(" "), _c("td", {
      staticClass: "graduated-price",
      class: _vm.paddingClasses,
      style: _vm.paddingInlineStyles
    }, [_vm._v("\n                        " + _vm._s(price.unitPrice.formatted) + "\n                        "), _c("transition", {
      attrs: {
        name: "fade"
      }
    }, [index === _vm.activeGraduationIndex ? _c("i", {
      staticClass: "fa fa-lg fa-check-circle-o text-appearance",
      attrs: {
        "aria-hidden": "true"
      }
    }) : _vm._e()])], 1), _vm._v(" "), _vm.showBasePrice ? _c("td", {
      staticClass: "graduated-base-price pl-3 d-none d-xl-block",
      class: _vm.paddingClasses,
      style: _vm.paddingInlineStyles
    }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.singleItemGraduatedBasePrice", {
      price: price.basePrice
    })))]) : _vm._e()]), _vm._v(" "), _vm.showBasePrice ? _c("tr", {
      staticClass: "graduated-base-price d-xl-none"
    }, [_c("td", {
      class: _vm.paddingClasses,
      style: _vm.paddingInlineStyles
    }), _vm._v(" "), _c("td", {
      class: _vm.paddingClasses,
      style: _vm.paddingInlineStyles
    }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.singleItemGraduatedBasePrice", {
      price: price.basePrice
    })))])]) : _vm._e()];
  })], 2)]), _vm._v(" "), _c("br")]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/GraduatedPrices.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/app/components/item/GraduatedPrices.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraduatedPrices_vue_vue_type_template_id_0fc0278e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraduatedPrices.vue?vue&type=template&id=0fc0278e */ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e");
/* harmony import */ var _GraduatedPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraduatedPrices.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GraduatedPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GraduatedPrices_vue_vue_type_template_id_0fc0278e__WEBPACK_IMPORTED_MODULE_0__.render,
  _GraduatedPrices_vue_vue_type_template_id_0fc0278e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/GraduatedPrices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GraduatedPrices.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_template_id_0fc0278e__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_template_id_0fc0278e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GraduatedPrices_vue_vue_type_template_id_0fc0278e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GraduatedPrices.vue?vue&type=template&id=0fc0278e */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GraduatedPrices.vue?vue&type=template&id=0fc0278e");


/***/ })

}]);
//# sourceMappingURL=ceres-resources_js_src_app_components_item_GraduatedPrices_vue.js.map