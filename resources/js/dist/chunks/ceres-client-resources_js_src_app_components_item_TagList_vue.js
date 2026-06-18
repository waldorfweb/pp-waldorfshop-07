"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_item_TagList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/TagList.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/TagList.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tag-list",
  props: {
    tagAppearance: {
      type: String,
      default: ""
    },
    marginClasses: {
      type: String,
      default: ""
    },
    marginInlineStyles: {
      type: String,
      default: ""
    },
    enabledRoutes: {
      type: Array,
      default: () => []
    },
    jsonUrl: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      images: []
    };
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    isTagRouteEnabled() {
      return this.enabledRoutes.includes("all") || this.enabledRoutes.includes("tags");
    },
    tags() {
      const currentVariation = this.$store.getters[`${this.itemId}/currentItemVariation`];
      return currentVariation && currentVariation.tags ? currentVariation.tags.filter(tag => tag.names.name) : [];
    }
  },
  mounted() {
    if (this.jsonUrl.length > 0) {
      fetch(this.jsonUrl).then(response => response.json()).then(data => this.images = data);
    }
  },
  methods: {
    getTextColorClass(bgColor) {
      if (!bgColor) return "badge-primary";
      const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
      const red = parseInt(color.substring(0, 2), 16);
      const green = parseInt(color.substring(2, 4), 16);
      const blue = parseInt(color.substring(4, 6), 16);
      const result = red * 0.299 + green * 0.587 + blue * 0.114;
      return result > 186 ? "text-dark" : "text-light";
    },
    getStyles(tag) {
      if (tag.color) {
        return {
          backgroundColor: tag.color
        };
      }
      return {};
    },
    getTagLink(tag) {
      let url = "/" + encodeURIComponent(tag.names.name.toLowerCase().replace(/\s+/g, '_')) + "_t" + tag.id;
      if (App.defaultLanguage != App.language) {
        url = "/" + App.language + url;
      }
      return url;
    },
    getImageForTag(tag) {
      const imageObject = this.images.find(o => o.id === tag.id);
      return imageObject === undefined ? "" : imageObject.img;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/TagList.vue?vue&type=template&id=2a940624":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/TagList.vue?vue&type=template&id=2a940624 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.tags && _vm.tags.length > 0 ? _c("div", {
    staticClass: "pt-1 pb-1"
  }, [_vm.isTagRouteEnabled ? _vm._l(_vm.tags, function (tag) {
    return _c("a", {
      key: tag.id,
      staticClass: "badge mr-1",
      class: [_vm.tagAppearance, _vm.marginClasses, _vm.getTextColorClass(tag.color)],
      style: [_vm.getStyles(tag), _vm.marginInlineStyles],
      attrs: {
        href: _vm.getTagLink(tag)
      }
    }, [_vm.getImageForTag(tag).length ? _c("img", {
      attrs: {
        src: _vm.getImageForTag(tag),
        alt: tag.names.name
      }
    }) : _c("span", [_vm._v(_vm._s(tag.names.name))])]);
  }) : _vm._l(_vm.tags, function (tag) {
    return _c("span", {
      key: tag.id,
      staticClass: "badge mr-1",
      class: [_vm.tagAppearance, _vm.marginClasses, _vm.getTextColorClass(tag.color)],
      style: [_vm.getStyles(tag), _vm.marginInlineStyles]
    }, [typeof _vm.getImageForTag(tag) != "undefined" ? _c("img", {
      attrs: {
        src: _vm.getImageForTag(tag),
        alt: tag.names.name
      }
    }) : _c("span", [_vm._v(_vm._s(tag.names.name))])]);
  })], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/TagList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/app/components/item/TagList.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TagList_vue_vue_type_template_id_2a940624__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TagList.vue?vue&type=template&id=2a940624 */ "./resources/js/src/app/components/item/TagList.vue?vue&type=template&id=2a940624");
/* harmony import */ var _TagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TagList.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/item/TagList.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TagList_vue_vue_type_template_id_2a940624__WEBPACK_IMPORTED_MODULE_0__.render,
  _TagList_vue_vue_type_template_id_2a940624__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/TagList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/TagList.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/app/components/item/TagList.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagList.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/TagList.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_TagList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/TagList.vue?vue&type=template&id=2a940624":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/TagList.vue?vue&type=template&id=2a940624 ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagList_vue_vue_type_template_id_2a940624__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagList_vue_vue_type_template_id_2a940624__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TagList_vue_vue_type_template_id_2a940624__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TagList.vue?vue&type=template&id=2a940624 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/TagList.vue?vue&type=template&id=2a940624");


/***/ })

}]);
//# sourceMappingURL=ceres-client-resources_js_src_app_components_item_TagList_vue.js.map