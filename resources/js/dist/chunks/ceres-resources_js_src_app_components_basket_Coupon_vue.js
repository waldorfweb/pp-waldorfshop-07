"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_basket_Coupon_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../exceptions/ExceptionMap */ "./resources/js/src/app/exceptions/ExceptionMap.js");
/* harmony import */ var _services_TranslationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/TranslationService */ "./resources/js/src/app/services/TranslationService.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const NotificationService = __webpack_require__(/*! ../../services/NotificationService */ "./resources/js/src/app/services/NotificationService.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "coupon",
  props: {
    template: {
      type: String,
      default: "#vue-coupon"
    }
  },
  data() {
    return {
      waiting: false,
      couponCode: ""
    };
  },
  watch: {
    redeemedCouponCode(val) {
      this.couponCode = val;
    }
  },
  computed: _objectSpread({
    disabled() {
      if (this.redeemedCouponCode) {
        return true;
      }
      return false;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_7__.mapState)({
    redeemedCouponCode: state => state.basket.data.couponCode,
    isBasketLoading: state => state.basket.isBasketLoading,
    isCheckoutReadonly: state => state.checkout.readOnly
  })),
  mounted() {
    this.$nextTick(() => {
      if (this.redeemedCouponCode) {
        this.couponCode = this.redeemedCouponCode;
      }
    });
  },
  methods: {
    redeemCode() {
      // remove whitespaces
      this.couponCode = this.couponCode.replace(/\s/g, "");
      if (this.couponCode.length > 0) {
        this.waiting = true;
        this.$store.dispatch("redeemCouponCode", this.couponCode).then(response => {
          this.waiting = false;
          NotificationService.success(_services_TranslationService__WEBPACK_IMPORTED_MODULE_6__["default"].translate("Ceres::Template.couponRedeemSuccess")).closeAfter(10000);
        }, error => {
          this.waiting = false;
          NotificationService.error(this.getCouponRedemptionErrorMessage(error)).closeAfter(10000);
        });
      } else {
        NotificationService.error(_services_TranslationService__WEBPACK_IMPORTED_MODULE_6__["default"].translate("Ceres::Template.couponIsEmpty")).closeAfter(10000);
      }
    },
    removeCode() {
      this.waiting = true;
      this.$store.dispatch("removeCouponCode", this.couponCode).then(response => {
        this.waiting = false;
        NotificationService.success(_services_TranslationService__WEBPACK_IMPORTED_MODULE_6__["default"].translate("Ceres::Template.couponRemoveSuccess")).closeAfter(10000);
      }, error => {
        this.waiting = false;
        NotificationService.error(_services_TranslationService__WEBPACK_IMPORTED_MODULE_6__["default"].translate("Ceres::Template.couponRemoveFailure")).closeAfter(10000);
      });
    },
    getCouponRedemptionErrorMessage(error) {
      const errorCode = error && error.warn && error.warn.code || 0;
      if (errorCode > 0 && _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_5__["default"].has(errorCode.toString())) {
        return _services_TranslationService__WEBPACK_IMPORTED_MODULE_6__["default"].translate("Ceres::Template." + _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_5__["default"].get(errorCode.toString()));
      }
      return _services_TranslationService__WEBPACK_IMPORTED_MODULE_6__["default"].translate("Ceres::Template.couponRedeemFailure");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "cmp"
  }, [_vm.isCheckoutReadonly && !!_vm.$translate("Ceres::Template.couponReadonlyInfoText") ? _c("p", [_vm._v("\n        " + _vm._s(_vm.couponReadonlyInfoText) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    class: {
      "input-group": true,
      "component-loading": _vm.isCheckoutReadonly,
      "is-loading": _vm.isCheckoutReadonly
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.couponCode,
      expression: "couponCode"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: _vm.$translate("Ceres::Template.couponEnterCoupon"),
      disabled: _vm.disabled || _vm.isCheckoutReadonly,
      "data-testing": "coupon-input"
    },
    domProps: {
      value: _vm.couponCode
    },
    on: {
      keyup: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.redeemCode();
      },
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.couponCode = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [!_vm.disabled ? _c("button", {
    staticClass: "btn btn-medium btn-primary btn-appearance",
    attrs: {
      type: "button",
      disabled: _vm.waiting || _vm.isCheckoutReadonly,
      "data-testing": "coupon-redeem"
    },
    on: {
      click: function ($event) {
        return _vm.redeemCode();
      }
    }
  }, [_c("icon", {
    attrs: {
      icon: "gift",
      loading: _vm.waiting
    }
  }), _vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.couponRedeem")) + "\n            ")], 1) : _c("button", {
    staticClass: "btn btn-medium btn-danger",
    attrs: {
      type: "button",
      disabled: _vm.waiting || _vm.isCheckoutReadonly,
      "data-testing": "coupon-remove"
    },
    on: {
      click: function ($event) {
        return _vm.removeCode();
      }
    }
  }, [_c("icon", {
    attrs: {
      icon: "trash",
      loading: _vm.waiting
    }
  }), _vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.couponRemove")) + "\n            ")], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/basket/Coupon.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/app/components/basket/Coupon.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Coupon_vue_vue_type_template_id_127bda26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coupon.vue?vue&type=template&id=127bda26 */ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26");
/* harmony import */ var _Coupon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coupon.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Coupon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Coupon_vue_vue_type_template_id_127bda26__WEBPACK_IMPORTED_MODULE_0__.render,
  _Coupon_vue_vue_type_template_id_127bda26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/basket/Coupon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Coupon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26 ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_template_id_127bda26__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_template_id_127bda26__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Coupon_vue_vue_type_template_id_127bda26__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Coupon.vue?vue&type=template&id=127bda26 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/Coupon.vue?vue&type=template&id=127bda26");


/***/ })

}]);
//# sourceMappingURL=ceres-resources_js_src_app_components_basket_Coupon_vue.js.map