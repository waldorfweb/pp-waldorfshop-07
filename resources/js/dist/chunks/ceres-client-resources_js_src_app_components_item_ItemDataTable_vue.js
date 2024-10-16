"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_item_ItemDataTable_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "item-data-table",
  props: {
    paddingClasses: {
      type: String,
      default: null
    },
    paddingInlineStyles: {
      type: String,
      default: null
    },
    itemInformation: {
      type: Array,
      default: () => []
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    currentVariation() {
      return this.$store.getters[`${this.itemId}/currentItemVariation`];
    }
  },
  data() {
    return {
      translationMap: {
        "item.id": "singleItemId",
        "item.condition.names.name": "singleItemCondition",
        "item.ageRestriction": "singleItemAge",
        "variation.externalId": "singleItemExternalVariationId",
        "variation.model": "singleItemModel",
        "item.manufacturer.externalName": "singleItemManufacturer",
        "item.producingCountry.names.name": "singleItemManufacturingCountry",
        "unit.names.name": "singleItemContent",
        "variation.weightG": "singleItemWeight",
        "variation.weightNetG": "singleItemNetWeight",
        "item.variationDimensions": "singleItemDimensions",
        "variation.customsTariffNumber": "singleItemCustomsTariffNumber"
      },
      formatMap: {
        "item.ageRestriction": {
          type: "filter",
          value: "ageRestriction"
        },
        "variation.weightG": {
          type: "text",
          value: " g"
        },
        "variation.weightNetG": {
          type: "text",
          value: " g"
        }
      }
    };
  },
  methods: {
    isCheckedAndNotEmpty(path) {
      if (path === "item.ageRestriction") {
        // remove check for the age restriction to be greater than zero (0 means 'No age restriction')
        return true;
      }
      if (path !== "item.variationDimensions") {
        const value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, path);
        return value !== "" && value !== 0;
      } else {
        return ["variation.lengthMM", "variation.widthMM", "variation.heightMM"].some(element => {
          const value = this.getFieldValue(element);
          return !(0,_helper_utils__WEBPACK_IMPORTED_MODULE_1__.isNullOrUndefined)(value) && value !== 0;
        });
      }
    },
    getTranslation(path) {
      return this.$translate("Ceres::Template." + this.translationMap[path]);
    },
    getFieldValue(path) {
      let value;
      if (path === "item.variationDimensions") {
        value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "variation.lengthMM") + "×" + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "variation.widthMM") + "×" + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "variation.heightMM") + "mm";
      } else if (path === "unit.names.name") {
        value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "unit.content") + " " + lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, "unit.names.name");
      } else {
        value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.currentVariation, path);
      }
      return this.formatFieldData(value, path);
    },
    formatFieldData(value, path) {
      const format = this.formatMap[path];
      if ((0,_helper_utils__WEBPACK_IMPORTED_MODULE_1__.isDefined)(format)) {
        switch (format.type) {
          case "text":
            return value + format.value;
          case "filter":
            const filterMethod = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(this.$options.filters, format.value);
            return (0,_helper_utils__WEBPACK_IMPORTED_MODULE_1__.isDefined)(filterMethod) ? filterMethod(value) : value;
        }
      }
      return value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("table", {
    staticClass: "table table-striped table-hover table-sm"
  }, [_c("tbody", [_vm._l(_vm.itemInformation, function (itemDataAccessor) {
    return [_vm.isCheckedAndNotEmpty(itemDataAccessor) ? _c("tr", [_c("td", {
      class: _vm.paddingClasses,
      style: _vm.paddingInlineStyles
    }, [_vm._v("\n                " + _vm._s(_vm.getTranslation(itemDataAccessor)) + "\n            ")]), _vm._v(" "), _c("td", {
      class: _vm.paddingClasses,
      style: _vm.paddingInlineStyles
    }, [_vm._v("\n                " + _vm._s(_vm.getFieldValue(itemDataAccessor)) + "\n            ")])]) : _vm._e()];
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/ItemDataTable.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemDataTable_vue_vue_type_template_id_7100e9f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemDataTable.vue?vue&type=template&id=7100e9f2 */ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2");
/* harmony import */ var _ItemDataTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemDataTable.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemDataTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemDataTable_vue_vue_type_template_id_7100e9f2__WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemDataTable_vue_vue_type_template_id_7100e9f2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/ItemDataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemDataTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2 ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_template_id_7100e9f2__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_template_id_7100e9f2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemDataTable_vue_vue_type_template_id_7100e9f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemDataTable.vue?vue&type=template&id=7100e9f2 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/ItemDataTable.vue?vue&type=template&id=7100e9f2");


/***/ })

}]);
//# sourceMappingURL=ceres-client-resources_js_src_app_components_item_ItemDataTable_vue.js.map