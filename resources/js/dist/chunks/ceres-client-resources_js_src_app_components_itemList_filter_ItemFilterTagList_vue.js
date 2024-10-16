"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_itemList_filter_ItemFilterTagList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    facetData: {
      type: Array,
      default() {
        return [];
      }
    },
    marginClasses: {
      type: String,
      default: null
    },
    marginInlineStyles: {
      type: String,
      default: null
    }
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    tagList: state => state.itemList.selectedFacets
  }),
  created() {
    var _this$$store$state$it;
    if (!((_this$$store$state$it = this.$store.state.itemList.facets) !== null && _this$$store$state$it !== void 0 && _this$$store$state$it.length)) {
      this.$store.commit("addFacets", this.facetData);
    }
  },
  methods: _objectSpread(_objectSpread({
    removeTag(tag) {
      this.selectFacet({
        facetValue: tag
      });
      this.loadItemList();
    },
    resetAllTags() {
      this.resetAllSelectedFacets();
      this.loadItemList();
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapMutations)(["resetAllSelectedFacets"])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)(["selectFacet", "loadItemList"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "selected-filters clearfix"
  }, [_vm._l(_vm.tagList, function (tag) {
    return _c("span", {
      class: "text-appearance selected-filter filter-" + tag.id + " " + _vm.marginClasses,
      style: _vm.marginInlineStyles,
      on: {
        click: function ($event) {
          return _vm.removeTag(tag);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-times",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" " + _vm._s(tag.name) + "\n    ")]);
  }), _vm._v(" "), _vm.tagList.length >= 2 ? _c("span", {
    class: "bg-appearance selected-filter reset-all" + " " + _vm.marginClasses,
    style: _vm.marginInlineStyles,
    on: {
      click: function ($event) {
        return _vm.resetAllTags();
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$translate("Ceres::Template.itemFilterReset")) + "\n    ")]) : _vm._e()], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemFilterTagList_vue_vue_type_template_id_6da91432__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemFilterTagList.vue?vue&type=template&id=6da91432 */ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432");
/* harmony import */ var _ItemFilterTagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemFilterTagList.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemFilterTagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemFilterTagList_vue_vue_type_template_id_6da91432__WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemFilterTagList_vue_vue_type_template_id_6da91432__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemFilterTagList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432 ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_template_id_6da91432__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_template_id_6da91432__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemFilterTagList_vue_vue_type_template_id_6da91432__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemFilterTagList.vue?vue&type=template&id=6da91432 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/itemList/filter/ItemFilterTagList.vue?vue&type=template&id=6da91432");


/***/ })

}]);
//# sourceMappingURL=ceres-client-resources_js_src_app_components_itemList_filter_ItemFilterTagList_vue.js.map