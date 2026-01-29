"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_pageDesign_PrivacySettings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
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






function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    consentGroups: {
      type: Object
    },
    cardClass: {
      type: String
    },
    cardStyle: {
      type: String
    }
  },
  data() {
    return {
      expandedGroups: {}
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapMutations)(["toggleConsent"])), {}, {
    isConsented(key, defaultValue) {
      return this.$store.getters.isConsented(key, defaultValue);
    },
    setGroupVisibility(groupKey, value, event) {
      event.preventDefault();
      event.stopPropagation();
      this.$set(this.expandedGroups, groupKey, value);
    },
    necessaryOnly(obj) {
      return obj.key === 'media' && obj.consents.every(consent => consent.necessary === true);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=template&id=28a6037b":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=template&id=28a6037b ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "privacy-settings d-flex flex-column"
  }, [_c("div", {
    staticClass: "privacy-settings-body overflow-auto"
  }, _vm._l(_vm.consentGroups, function (consentGroup, index) {
    return _c("div", {
      staticClass: "card consent-group",
      class: {
        cardClass: _vm.cardClass,
        "mb-3": index < consentGroup.length - 1
      },
      style: _vm.cardStyle
    }, [_c("div", {
      staticClass: "card-body mb-0",
      on: {
        click: function ($event) {
          $event.stopPropagation();
          return _vm.toggleConsent(consentGroup.key + ".*");
        }
      }
    }, [_c("p", {
      staticClass: "card-title h4 d-flex"
    }, [_c("span", {
      staticClass: "flex-fill"
    }, [consentGroup.label.length > 0 ? [_vm._v("\n                            " + _vm._s(consentGroup.label) + "\n                        ")] : [_vm._v("\n                            " + _vm._s(_vm.$translate("Ceres::Template.privacySettingsDefaultGroup")) + "\n                        ")], _vm._v("\n                        (" + _vm._s(consentGroup.consents.length) + ")\n                    ")], 2), _vm._v(" "), !consentGroup.necessary && !_vm.necessaryOnly(consentGroup) ? _c("span", {
      staticClass: "custom-control custom-switch custom-control-appearance"
    }, [_c("input", {
      staticClass: "custom-control-input",
      attrs: {
        type: "checkbox",
        "aria-label": _vm.$translate("Ceres::Template.privacySettings")
      },
      domProps: {
        checked: _vm.isConsented(consentGroup.key + ".*")
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "custom-control-label"
    })]) : _c("span", {
      staticClass: "badge badge-primary bg-appearance"
    }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.privacySettingsNecessary")))])]), _vm._v(" "), consentGroup.description.length > 0 ? _c("p", {
      staticClass: "card-text"
    }, [_vm._v(_vm._s(consentGroup.description))]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "card-body mt-0"
    }, [_vm.expandedGroups[consentGroup.key] ? _c("div", _vm._l(consentGroup.consents, function (consent) {
      return _c("div", {
        staticClass: "card consent bg-light mb-3",
        class: {
          "border-primary border-appearance active": _vm.isConsented(consentGroup.key + "." + consent.key) || consent.necessary || consentGroup.necessary
        }
      }, [_c("div", {
        staticClass: "card-body",
        on: {
          click: function ($event) {
            $event.stopPropagation();
            return _vm.toggleConsent(consentGroup.key + "." + consent.key);
          }
        }
      }, [_c("p", {
        staticClass: "d-flex mb-0 font-weight-bold"
      }, [_c("span", {
        staticClass: "flex-fill"
      }, [_vm._v(_vm._s(consent.label))]), _vm._v(" "), !consentGroup.necessary && !consent.necessary ? _c("span", {
        staticClass: "custom-control custom-switch custom-control-appearance"
      }, [_c("input", {
        staticClass: "custom-control-input",
        attrs: {
          type: "checkbox"
        },
        domProps: {
          checked: _vm.isConsented(consentGroup.key + "." + consent.key)
        }
      }), _vm._v(" "), _c("label", {
        staticClass: "custom-control-label"
      })]) : _vm._e()])]), _vm._v(" "), consent.provider.length > 0 || consent.description.length > 0 || consent.policyUrl.length > 0 || consent.lifespan.length > 0 ? _c("table", {
        staticClass: "table table-responsive-md table-sm table-striped mb-0"
      }, [_c("tbody", [consent.provider.length > 0 ? _c("tr", [_c("td", {
        staticClass: "pl-3"
      }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.privacySettingsProvider")))]), _vm._v(" "), _c("td", {
        staticClass: "pr-3"
      }, [_vm._v(_vm._s(consent.provider))])]) : _vm._e(), _vm._v(" "), consent.description.length > 0 ? _c("tr", [_c("td", {
        staticClass: "pl-3"
      }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.privacySettingsDescription")))]), _vm._v(" "), _c("td", {
        staticClass: "pr-3"
      }, [_vm._v(_vm._s(consent.description))])]) : _vm._e(), _vm._v(" "), consent.policyUrl.length > 0 ? _c("tr", [_c("td", {
        staticClass: "pl-3"
      }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.privacySettingsPolicyUrl")))]), _vm._v(" "), _c("td", {
        staticClass: "pr-3"
      }, [_c("a", {
        staticClass: "text-primary text-appearance",
        attrs: {
          href: consent.policyUrl,
          target: "_blank"
        }
      }, [_vm._v(_vm._s(consent.policyUrl))])])]) : _vm._e(), _vm._v(" "), consent.lifespan.length > 0 ? _c("tr", [_c("td", {
        staticClass: "pl-3"
      }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.privacySettingsLifespan")))]), _vm._v(" "), _c("td", {
        staticClass: "pr-3"
      }, [_vm._v(_vm._s(consent.lifespan))])]) : _vm._e()])]) : _vm._e()]);
    }), 0) : _vm._e(), _vm._v(" "), !_vm.expandedGroups[consentGroup.key] ? _c("a", {
      staticClass: "card-link text-primary text-appearance",
      attrs: {
        href: "#",
        "data-testing": "privacy-settings-show-more-information"
      },
      on: {
        click: function ($event) {
          return _vm.setGroupVisibility(consentGroup.key, true, $event);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$translate("Ceres::Template.privacySettingsMoreInformation")) + "\n                ")]) : _c("a", {
      staticClass: "card-link text-primary text-appearance",
      attrs: {
        href: "#",
        "data-testing": "privacy-settings-hide-more-information"
      },
      on: {
        click: function ($event) {
          return _vm.setGroupVisibility(consentGroup.key, false, $event);
        }
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$translate("Ceres::Template.privacySettingsLessInformation")) + "\n                ")])])]);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/pageDesign/PrivacySettings.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/app/components/pageDesign/PrivacySettings.vue ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrivacySettings_vue_vue_type_template_id_28a6037b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrivacySettings.vue?vue&type=template&id=28a6037b */ "./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=template&id=28a6037b");
/* harmony import */ var _PrivacySettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrivacySettings.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrivacySettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrivacySettings_vue_vue_type_template_id_28a6037b__WEBPACK_IMPORTED_MODULE_0__.render,
  _PrivacySettings_vue_vue_type_template_id_28a6037b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/src/app/components/pageDesign/PrivacySettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacySettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrivacySettings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacySettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=template&id=28a6037b":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=template&id=28a6037b ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacySettings_vue_vue_type_template_id_28a6037b__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacySettings_vue_vue_type_template_id_28a6037b__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrivacySettings_vue_vue_type_template_id_28a6037b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrivacySettings.vue?vue&type=template&id=28a6037b */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/pageDesign/PrivacySettings.vue?vue&type=template&id=28a6037b");


/***/ })

}]);
//# sourceMappingURL=ceres-resources_js_src_app_components_pageDesign_PrivacySettings_vue.js.map