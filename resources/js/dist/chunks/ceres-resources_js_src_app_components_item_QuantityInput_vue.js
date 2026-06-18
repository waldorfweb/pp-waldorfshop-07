"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_item_QuantityInput_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/number */ "./resources/js/src/app/helper/number.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");
/* harmony import */ var _helper_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helper/debounce */ "./resources/js/src/app/helper/debounce.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "quantity-input",
  props: {
    value: {
      type: Number,
      required: true
    },
    timeout: {
      type: Number,
      required: false,
      default: 500
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false
    },
    interval: {
      type: Number,
      required: false,
      default: 1
    },
    waiting: {
      type: Boolean,
      required: false
    },
    variationId: {
      type: Number,
      required: false
    },
    useAppearance: Boolean
  },
  data() {
    return {
      compValue: this.value,
      compMin: this.min,
      compMax: this.max,
      compInterval: this.interval,
      compDecimals: 0,
      onValueChanged: null
    };
  },
  created() {
    this.compInterval = (0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.defaultValue)(this.compInterval, 1);
    this.compInterval = this.compInterval === 0 ? 1 : this.compInterval;
    const minDecimals = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.floatLength)(this.min);
    const intervalDecimals = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.floatLength)(this.compInterval);
    this.compDecimals = Math.max(minDecimals, intervalDecimals);
    this.onValueChanged = (0,_helper_debounce__WEBPACK_IMPORTED_MODULE_7__.debounce)(() => {
      this.$emit("quantity-change", this.compValue);
    }, (0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.defaultValue)(this.timeout, 500));
    if (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.variationId)) {
      this.fetchQuantityFromBasket();
    }
  },
  computed: _objectSpread({
    variationBasketQuantity() {
      if ((0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.variationId)) {
        return 0;
      }
      if (this.itemSetVariationId <= 0 || this.variationId === this.itemSetVariationId) {
        const basketObject = this.$store.state.basket.items.find(variations => variations.variationId === this.variationId);
        return basketObject ? basketObject.quantity : 0;
      }
      return 0;
    },
    isMinimum() {
      return (0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isDefined)(this.compMin) && this.compValue - this.compInterval < this.compMin;
    },
    isMaximum() {
      return (0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isDefined)(this.compMax) && this.compValue + this.compInterval > this.compMax;
    },
    minimumHint() {
      return this.$translate("Ceres::Template.singleItemQuantityMin", {
        min: this.$options.filters.numberFormat(this.compMin)
      });
    },
    maximumHint() {
      return this.$translate("Ceres::Template.singleItemQuantityMax", {
        max: this.$options.filters.numberFormat(this.max)
      });
    },
    displayValue() {
      return this.$options.filters.numberFormat(this.compValue);
    },
    itemSetVariationId() {
      if (this.$store.state.items.itemSetId > 0) {
        return this.$store.getters[`${this.$store.state.items.itemSetId}/currentItemVariation`].variation.id;
      }
      return 0;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapState)({
    basketItems: state => state.basket.items
  })),
  watch: {
    variationId(newValue) {
      if ((0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isDefined)(newValue)) {
        this.fetchQuantityFromBasket();
      }
    },
    basketItems: {
      handler(newValue, oldValue) {
        if ((0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isDefined)(this.variationId)) {
          this.fetchQuantityFromBasket();
        }
      },
      deep: true
    },
    min(newValue) {
      this.compMin = newValue;
      this.fetchQuantityFromBasket();
    },
    max(newValue) {
      this.compMax = newValue;
      this.fetchQuantityFromBasket();
    },
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.setValue(newValue);
      }
    },
    interval(newInterval) {
      this.compInterval = (0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.defaultValue)(newInterval, 1);
    }
  },
  methods: {
    increaseValue() {
      const newValue = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.formatFloat)(this.compValue + this.compInterval, this.compDecimals);
      if (((0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.compMax) || newValue <= this.compMax) && !this.waiting) {
        this.setValue(newValue);
      }
    },
    decreaseValue() {
      const newValue = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.formatFloat)(this.compValue - this.compInterval, this.compDecimals);
      if (((0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.compMin) || newValue >= this.compMin) && !this.waiting) {
        this.setValue(newValue);
      }
    },
    setValue(value) {
      // consider the configured decimal seperator (if the input is typed in the input field)
      if (typeof value === "string") {
        value = value.replace(App.decimalSeparator || ",", ".");
      }
      value = parseFloat(value);
      if (isNaN(value)) {
        value = (0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.defaultValue)(this.compMin, 1);
      }

      // limit new value to min/ max value
      value = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.limit)(value, this.compMin, this.compMax);

      // make sure, new value is an even multiple of interval
      let diff;
      if (this.variationBasketQuantity === 0 && this.min !== 0) {
        diff = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.formatFloat)((value - this.min) % this.compInterval, this.compDecimals, true);
      } else {
        diff = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.formatFloat)(value % this.compInterval, this.compDecimals, true);
      }
      if (diff > 0 && diff !== this.compInterval) {
        if (diff < this.compInterval / 2) {
          value -= diff;
        } else {
          value += this.compInterval - diff;
        }
        value = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.limit)(value, this.compMin, this.compMax);
      }

      // cut fraction
      value = (0,_helper_number__WEBPACK_IMPORTED_MODULE_5__.formatFloat)(value, this.compDecimals);
      if (value !== this.compValue) {
        this.compValue = value;
        this.onValueChanged();
      } else if (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.$refs.quantityInputField)) {
        this.$refs.quantityInputField.value = this.displayValue;
      }
    },
    fetchQuantityFromBasket() {
      if (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.min) && this.variationBasketQuantity >= this.min && this.variationBasketQuantity !== 0) {
        // set the minimum value to the interval, if the item is already in the basket
        this.compMin = this.compInterval;
      } else if (this.variationBasketQuantity === 0) {
        // reset the minimum, when item is not in the basket
        this.compMin = this.min;
      }
      if (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.isNullOrUndefined)(this.max)) {
        // decrease maximum quantity by quantity of variations already in basket
        this.compMax = this.max - this.variationBasketQuantity;
        if (this.variationBasketQuantity + this.compInterval > this.max) {
          this.compMin = 0;
          this.compMax = 0;
          this.$emit("out-of-stock", true);
        } else {
          this.$emit("out-of-stock", false);
        }
      } else {
        this.$emit("out-of-stock", false);
      }
      this.setValue(this.compMin);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=62163595":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=62163595 ***!
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
  return _c("div", {
    staticClass: "qty-box d-flex h-100"
  }, [_c("input", {
    ref: "quantityInputField",
    staticClass: "qty-input text-center",
    attrs: {
      type: "text",
      disabled: _vm.waiting,
      "aria-label": _vm.$translate("Ceres::Template.itemQuantityInput")
    },
    domProps: {
      value: _vm.displayValue
    },
    on: {
      change: function ($event) {
        return _vm.setValue($event.target.value);
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "qty-btn-container d-flex flex-column"
  }, [_c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.isMaximum && _vm.compMax !== 0,
      expression: "isMaximum && compMax !== 0"
    }],
    staticClass: "btn qty-btn flex-fill d-flex justify-content-center p-0",
    class: {
      disabled: _vm.isMaximum || _vm.waiting,
      "btn-appearance": _vm.useAppearance
    },
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      "data-testing": "quantity-btn-increase",
      title: _vm.maximumHint,
      "aria-label": _vm.$translate("Ceres::Template.itemQuantityInputIncrease")
    },
    on: {
      click: function ($event) {
        return _vm.increaseValue();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-plus default-float",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.isMinimum && _vm.compMax !== 0,
      expression: "isMinimum && compMax !== 0"
    }],
    staticClass: "btn qty-btn flex-fill d-flex justify-content-center p-0",
    class: {
      disabled: _vm.isMinimum || _vm.waiting,
      "btn-appearance": _vm.useAppearance
    },
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      "data-testing": "quantity-btn-decrease",
      title: _vm.minimumHint,
      "aria-label": _vm.$translate("Ceres::Template.itemQuantityInputDecrease")
    },
    on: {
      click: function ($event) {
        return _vm.decreaseValue();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-minus default-float",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/QuantityInput.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/app/components/item/QuantityInput.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuantityInput_vue_vue_type_template_id_62163595__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuantityInput.vue?vue&type=template&id=62163595 */ "./resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=62163595");
/* harmony import */ var _QuantityInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuantityInput.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuantityInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuantityInput_vue_vue_type_template_id_62163595__WEBPACK_IMPORTED_MODULE_0__.render,
  _QuantityInput_vue_vue_type_template_id_62163595__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/QuantityInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuantityInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/QuantityInput.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=62163595":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=62163595 ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_template_id_62163595__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_template_id_62163595__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_QuantityInput_vue_vue_type_template_id_62163595__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuantityInput.vue?vue&type=template&id=62163595 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/QuantityInput.vue?vue&type=template&id=62163595");


/***/ })

}]);
//# sourceMappingURL=ceres-resources_js_src_app_components_item_QuantityInput_vue.js.map