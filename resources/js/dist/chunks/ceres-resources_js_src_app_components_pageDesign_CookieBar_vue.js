"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_pageDesign_CookieBar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.every.js */ "./node_modules/core-js/modules/esnext.iterator.every.js");
/* harmony import */ var core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_componentId_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/componentId.mixin */ "./resources/js/src/app/mixins/componentId.mixin.js");






function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    styles: String,
    classes: String,
    consentGroups: Object,
    showRejectAll: {
      type: Boolean,
      default: true
    }
  },
  mixins: [_mixins_componentId_mixin__WEBPACK_IMPORTED_MODULE_7__.ComponentIdMixin],
  // Experimental mixin, may be removed in the future.

  data() {
    return {
      isCollapsed: true,
      isExpanded: false
    };
  },
  computed: {
    isVisible() {
      return App.isShopBuilder || !this.$store.state.consents.hasResponse || !this.isCollapsed;
    },
    isShopBuilder() {
      return App.isShopBuilder;
    },
    text() {
      const links = {
        gtc: "<a class=\"text-appearance\" href=\"" + App.urls.gtc + "\" target=\"_blank\">" + this.$translate("Ceres::Template.checkoutGtc") + "</a>",
        cancellation: "<a class=\"text-appearance\" href=\"" + App.urls.cancellationRights + "\" target=\"_blank\">" + this.$translate("Ceres::Template.checkoutCancellationRight", {
          "hyphen": "&shy;"
        }) + "</a>",
        policy: "<a class=\"text-appearance\" href=\"" + App.urls.privacyPolicy + "\" target=\"_blank\">" + this.$translate("Ceres::Template.checkoutPrivacyPolicy", {
          "hyphen": "&shy;"
        }) + "</a>",
        legal: "<a class=\"text-appearance\" href=\"" + App.urls.legalDisclosure + "\" target=\"_blank\">" + this.$translate('Ceres::Template.footerLegalDisclosure') + "</a>"
      };
      return this.$translate("Ceres::Template.cookieBarHintText", links);
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapMutations)(["storeConsents", "acceptAll", "denyAll"])), {}, {
    close() {
      this.isCollapsed = true;
      this.isExpanded = false;
    },
    open() {
      this.isCollapsed = false;
    },
    isConsented(groupKey) {
      return this.$store.getters.isConsented(groupKey + ".*");
    },
    toggleConsent(groupKey) {
      this.$store.commit("toggleConsent", groupKey + ".*");
    },
    necessaryOnly(obj) {
      return obj.key === 'media' && obj.consents.every(consent => consent.necessary === true);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=template&id=cb92f282":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=template&id=cb92f282 ***!
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
  return _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.$ceres.isSSR,
      expression: "!$ceres.isSSR"
    }],
    staticClass: "cookie-bar",
    class: {
      out: !_vm.isVisible,
      "border-top bg-white": _vm.isVisible,
      "fixed-bottom": !_vm.isShopBuilder || false
    }
  }, [_vm.isVisible ? _c("div", {
    staticClass: "container-max"
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isExpanded,
      expression: "!isExpanded"
    }],
    staticClass: "row py-3",
    class: _vm.classes,
    style: _vm.styles
  }, [_c("div", {
    staticClass: "col-12 col-md-8"
  }, [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.text)
    }
  }), _vm._v(" "), _c("div", [_vm._l(_vm.consentGroups, function (consentGroup) {
    return [consentGroup.consents.length > 0 ? _c("span", {
      key: consentGroup.key,
      staticClass: "custom-control custom-switch custom-control-appearance d-md-inline-block mr-3"
    }, [_c("input", {
      staticClass: "custom-control-input",
      attrs: {
        type: "checkbox",
        id: _vm._cid + "-group-" + consentGroup.key,
        disabled: consentGroup.necessary || _vm.necessaryOnly(consentGroup)
      },
      domProps: {
        checked: _vm.isConsented(consentGroup.key) || consentGroup.necessary || _vm.necessaryOnly(consentGroup)
      },
      on: {
        change: function ($event) {
          return _vm.toggleConsent(consentGroup.key);
        }
      }
    }), _vm._v(" "), _c("label", {
      staticClass: "custom-control-label",
      attrs: {
        for: _vm._cid + "-group-" + consentGroup.key
      }
    }, [consentGroup.label.length > 0 ? [_vm._v("\n                                    " + _vm._s(consentGroup.label) + "\n                                ")] : [_vm._v("\n                                    " + _vm._s(_vm.$translate("Ceres::Template.privacySettingsDefaultGroup")) + "\n                                ")]], 2)]) : _vm._e()];
  }), _vm._v(" "), _c("a", {
    staticClass: "text-primary text-appearance d-block d-md-inline-block",
    attrs: {
      href: "#",
      "data-testing": "cookie-bar-show-more-information"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.isExpanded = true;
      }
    }
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.cookieBarMoreSettings")))])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "button-order col-12 col-md-4 pt-3 pt-md-0"
  }, [_c("button", {
    staticClass: "btn btn-block btn-default btn-appearance button-order-1 mb-2 mt-0",
    attrs: {
      "data-testing": "cookie-bar-accept-all"
    },
    on: {
      click: function ($event) {
        _vm.acceptAll();
        _vm.close();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$translate("Ceres::Template.cookieBarAcceptAll")) + "\n                ")]), _vm._v(" "), _vm.showRejectAll ? _c("button", {
    staticClass: "btn btn-block btn-default btn-appearance button-order-2 mb-2 mt-0",
    attrs: {
      "data-testing": "cookie-bar-deny-all"
    },
    on: {
      click: function ($event) {
        _vm.denyAll();
        _vm.close();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$translate("Ceres::Template.cookieBarDenyAll")) + "\n                ")]) : _vm._e(), _vm._v(" "), _c("button", {
    staticClass: "btn btn-block btn-default button-order-3 mb-2 mt-0",
    attrs: {
      "data-testing": "cookie-bar-save"
    },
    on: {
      click: function ($event) {
        _vm.storeConsents();
        _vm.close();
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$translate("Ceres::Template.cookieBarSave")) + "\n                ")])])]), _vm._v(" "), _vm.isExpanded ? _c("div", {
    staticClass: "row py-3",
    class: _vm.classes,
    style: _vm.styles
  }, [_c("div", {
    staticClass: "col-12 mb-3"
  }, [_c("privacy-settings", {
    attrs: {
      "consent-groups": _vm.consentGroups
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-3"
  }, [_c("a", {
    staticClass: "text-primary text-appearance d-inline-block mb-3",
    attrs: {
      href: "#",
      "data-testing": "cookie-bar-hide-more-information"
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.isExpanded = false;
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$translate("Ceres::Template.cookieBarBack")) + "\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-9"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12 col-md-4 mt-2 mt-md-0"
  }, [_c("button", {
    staticClass: "btn btn-block btn-default btn-appearance",
    attrs: {
      "data-testing": "cookie-bar-expanded-accept-all"
    },
    on: {
      click: function ($event) {
        _vm.acceptAll();
        _vm.close();
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$translate("Ceres::Template.cookieBarAcceptAll")) + "\n                        ")])]), _vm._v(" "), _vm.showRejectAll ? _c("div", {
    staticClass: "col-12 col-md-4 mt-2 mt-md-0"
  }, [_c("button", {
    staticClass: "btn btn-block btn-default btn-appearance",
    attrs: {
      "data-testing": "cookie-bar-expanded-deny-all"
    },
    on: {
      click: function ($event) {
        _vm.denyAll();
        _vm.close();
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$translate("Ceres::Template.cookieBarDenyAll")) + "\n                        ")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 col-md-4"
  }, [_c("button", {
    staticClass: "btn btn-block btn-default",
    attrs: {
      "data-testing": "cookie-bar-expanded-save"
    },
    on: {
      click: function ($event) {
        _vm.storeConsents();
        _vm.close();
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$translate("Ceres::Template.cookieBarSave")) + "\n                        ")])])])])]) : _vm._e()]) : _c("div", [_c("button", {
    staticClass: "btn btn-primary btn-appearance",
    attrs: {
      "aria-label": _vm.$translate("Ceres::Template.cookieBarPrivacySettings")
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        _vm.isCollapsed = false;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-shield float-none",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "d-none d-sm-inline-block"
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.cookieBarPrivacySettings")))])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/pageDesign/CookieBar.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/app/components/pageDesign/CookieBar.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CookieBar_vue_vue_type_template_id_cb92f282__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookieBar.vue?vue&type=template&id=cb92f282 */ "./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=template&id=cb92f282");
/* harmony import */ var _CookieBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookieBar.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CookieBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CookieBar_vue_vue_type_template_id_cb92f282__WEBPACK_IMPORTED_MODULE_0__.render,
  _CookieBar_vue_vue_type_template_id_cb92f282__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/src/app/components/pageDesign/CookieBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookieBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CookieBar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookieBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=template&id=cb92f282":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=template&id=cb92f282 ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CookieBar_vue_vue_type_template_id_cb92f282__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CookieBar_vue_vue_type_template_id_cb92f282__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CookieBar_vue_vue_type_template_id_cb92f282__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CookieBar.vue?vue&type=template&id=cb92f282 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/CookieBar.vue?vue&type=template&id=cb92f282");


/***/ }),

/***/ "./resources/js/src/app/mixins/componentId.mixin.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/app/mixins/componentId.mixin.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentIdMixin: function() { return /* binding */ ComponentIdMixin; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/utils */ "./resources/js/src/app/helper/utils.js");




/**
 * Mixing for generating unique keys, that can be similarly created on server and clientside.
 * Collisions are possible in theory, be advised that this is an experimental mixin and may be removed in the future.
 */


const KEYS = {};
if (typeof document !== "undefined") {
  document.debug_component_ids = KEYS;
}
const ComponentIdMixin = {
  created() {
    var _this$$vnode;
    // Root elements, early exit
    if (!this.$options._componentTag && !((_this$$vnode = this.$vnode) !== null && _this$$vnode !== void 0 && _this$$vnode.tag)) {
      return;
    }
    this._cid = "";
    let node = this;
    let prevNode = null;
    while (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(node)) {
      if (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_4__.isNullOrUndefined)(prevNode)) {
        if (hasSiblings(node.$children, prevNode)) {
          const occurenceIndex = getOwnOccurenceIndex(node.$children, prevNode);
          this._cid += occurenceIndex;
        }
      }
      this._cid += "_";
      if (node.$options._componentTag) {
        this._cid += node.$options._componentTag;
      }
      prevNode = node;
      node = node.$parent;
    }
    if (!KEYS[this._cid]) {
      KEYS[this._cid] = 0;
    }
    KEYS[this._cid]++;
  }
};
function hasSiblings(potentialSiblings, node) {
  for (const potentialSibling of potentialSiblings) {
    if (potentialSibling.$options._componentTag === node.$options._componentTag && potentialSibling !== node) {
      return true;
    }
  }
  return false;
}
function getOwnOccurenceIndex(potentialSiblings, node) {
  const siblings = potentialSiblings.filter(potentialSibling => potentialSibling.$options._componentTag === node.$options._componentTag);
  return siblings.indexOf(node);
}

/***/ })

}]);
//# sourceMappingURL=ceres-resources_js_src_app_components_pageDesign_CookieBar_vue.js.map