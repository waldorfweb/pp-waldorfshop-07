"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_basket_AddToBasket_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../exceptions/ExceptionMap */ "./resources/js/src/app/exceptions/ExceptionMap.js");
/* harmony import */ var _services_UrlService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/UrlService */ "./resources/js/src/app/services/UrlService.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helper/utils */ "./resources/js/src/app/helper/utils.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/buttonSizeProperty.mixin */ "./resources/js/src/app/mixins/buttonSizeProperty.mixin.js");
/* harmony import */ var _item_QuantityInput_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../item/QuantityInput.vue */ "./resources/js/src/app/components/item/QuantityInput.vue");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






const NotificationService = __webpack_require__(/*! ../../services/NotificationService */ "./resources/js/src/app/services/NotificationService.js");
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add-to-basket",
  mixins: [_mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_10__.ButtonSizePropertyMixin],
  components: {
    QuantityInput: _item_QuantityInput_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: {
    itemUrl: String,
    showQuantity: {
      type: Boolean,
      default: false
    },
    useLargeScale: {
      type: Boolean,
      default: false
    },
    variationId: {
      type: Number
    },
    isSalable: {
      type: Boolean,
      default: false
    },
    hasChildren: {
      type: Boolean,
      default: false
    },
    intervalQuantity: {
      type: Number,
      default: 1
    },
    minimumQuantity: {
      type: Number,
      default: 0
    },
    maximumQuantity: {
      type: Number,
      default: null
    },
    orderProperties: {
      type: Array,
      default: () => []
    },
    hasOrderProperties: {
      type: Boolean,
      default: false
    },
    hasRequiredOrderProperty: {
      type: Boolean,
      default: false
    },
    hasPrice: {
      type: Boolean,
      default: true
    },
    hasGraduatedPrice: {
      type: Boolean,
      default: false
    },
    paddingClasses: {
      type: String,
      default: null
    },
    paddingInlineStyles: {
      type: String,
      default: null
    },
    isWishList: {
      type: Boolean,
      default: false
    },
    propQuantity: {
      type: Number,
      default: null
    },
    itemType: {
      type: String,
      default: null
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: _objectSpread({
    isSet() {
      return this.$store.state.items[this.itemId] && this.$store.state.items[this.itemId].variation && this.$store.state.items[this.itemId].variation.documents[0].data.item.itemType === "set" || this.itemType === "set";
    },
    canBeAddedToBasket() {
      return this.isSalable && !this.hasChildren && !(this.minimumQuantity != 1 || this.intervalQuantity != 1) && !this.requiresProperties && this.hasPrice && !this.hasGraduatedPrice && !this.isSet;
    },
    requiresProperties() {
      return App.config.item.requireOrderProperties && (this.hasOrderProperties || this.orderProperties.filter(property => property.property.isShownOnItemPage).length > 0) || this.hasRequiredOrderProperty;
    },
    buttonClasses() {
      const classes = [];
      if ((0,_helper_utils__WEBPACK_IMPORTED_MODULE_9__.isDefined)(this.buttonSizeClass)) {
        classes.push(this.buttonSizeClass);
      }
      if ((0,_helper_utils__WEBPACK_IMPORTED_MODULE_9__.isDefined)(this.paddingClasses)) {
        classes.push(this.paddingClasses.split(" "));
      }
      return classes;
    },
    tooltipText() {
      if (this.hasAvailableVariations) {
        return this.$translate("Ceres::Template.singleItemPleaseSelectValidVariation");
      } else {
        return this.$translate("Ceres::Template.singleItemPleaseSelectNotAvailable");
      }
    },
    variationOrderQuantity() {
      return this.$store.state.items[this.itemId] && this.$store.state.items[this.itemId].variationOrderQuantity;
    },
    variationMissingProperties() {
      return this.$store.getters[`${this.itemId}/variationMissingProperties`];
    },
    hasAvailableVariations() {
      return this.$store.state.items[this.itemId] && this.$store.state.items[this.itemId].variationSelect && this.$store.state.items[this.itemId].variationSelect.variations.some(variation => variation.isSalable);
    },
    allVariationsSelected() {
      if (this.isSet) {
        return this.$store.getters["itemSetAllVariationSelected"];
      } else {
        // FIX return true if module is not registered. This equals the default value from the module
        // and is required to use this component in other contexts, e.g. the category view
        return !this.$store.state.items[this.itemId] || this.$store.state.items[this.itemId].variationSelect && this.$store.state.items[this.itemId].variationSelect.isVariationSelected;
      }
    },
    isLoading() {
      return this.$store.state.items.isAddToBasketLoading === this.variationId || this.$store.state.items.isSetLoading;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_12__.mapState)({
    basketItems: state => state.basket.items,
    isBasketLoading: state => state.basket.isBasketLoading
  })),
  data() {
    return {
      quantity: 1,
      buttonLockState: false
    };
  },
  methods: {
    /**
     * add an item to basket-resource
     */
    addToBasket() {
      this.$store.dispatch("loadComponent", "add-item-to-basket-overlay");
      this.$store.dispatch("loadComponent", "basket-preview");
      if (this.variationMissingProperties !== undefined && this.variationMissingProperties.length) {
        this.showMissingPropertiesError();
      } else if (this.isSalable || this.isSet) {
        this.$store.commit("setIsAddToBasketLoading", this.variationId);
        const orderParamsAndSurcharge = extractPropertiesAndSurcharge(this.orderProperties);
        const basketObject = {
          variationId: this.variationId,
          quantity: this.quantity,
          basketItemOrderParams: orderParamsAndSurcharge.orderParams,
          totalOrderParamsMarkup: orderParamsAndSurcharge.totalSurcharge
        };
        if (this.isSet) {
          const setComponents = [];
          this.$store.state.items.setComponentIds.forEach(itemId => {
            const setComponent = this.$store.getters[`${itemId}/currentItemVariation`];
            const variationId = setComponent && setComponent.variation.id;

            // Extract order properties and total surcharge for set components
            const setComponentOrderParamsAndSurcharge = extractPropertiesAndSurcharge(setComponent.properties.filter(prop => prop.property.isOderProperty));
            setComponents.push({
              variationId: variationId,
              quantity: this.$store.state.items[itemId].variationOrderQuantity,
              basketItemOrderParams: setComponentOrderParamsAndSurcharge.orderParams,
              totalOrderParamsMarkup: setComponentOrderParamsAndSurcharge.totalSurcharge
            });
          });
          basketObject.setComponents = setComponents;
        }
        this.$store.dispatch("addBasketItem", basketObject).then(response => {
          document.dispatchEvent(new CustomEvent("afterBasketItemAdded", {
            detail: basketObject
          }));
          this.$store.commit("setIsAddToBasketLoading", 0);
        }, error => {
          this.$store.commit("setIsAddToBasketLoading", 0);
          if (error.data) {
            NotificationService.error(this.$translate("Ceres::Template." + _exceptions_ExceptionMap__WEBPACK_IMPORTED_MODULE_7__["default"].get(error.data.exceptionCode.toString()), error.data.placeholder)).closeAfter(5000);
          }
        });
      }
    },
    showMissingPropertiesError() {
      this.$store.commit(`${this.itemId}/setVariationMarkInvalidProps`, true);
      const propertyNames = this.variationMissingProperties.map(property => property.property.names.name);
      let errorMsgContent = "";
      for (const name of propertyNames) {
        errorMsgContent += name + "<br>";
      }
      NotificationService.error(this.$translate("Ceres::Template.singleItemMissingOrderPropertiesError").replace("<properties>", errorMsgContent));
    },
    directToItem() {
      (0,_services_UrlService__WEBPACK_IMPORTED_MODULE_8__.navigateTo)(this.itemUrl);
    },
    handleButtonState(value) {
      this.buttonLockState = value;
    },
    /**
     * update the property quantity of the current instance
     * @param value
     */
    updateQuantity(value) {
      this.quantity = value;
    }
  },
  watch: {
    quantity(value) {
      if (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_9__.isNullOrUndefined)(this.itemId)) {
        this.$store.commit(`${this.itemId}/setVariationOrderQuantity`, value);
        this.$store.commit(`${this.itemId}/setVariationPropertySurcharges`, this.$store.getters[`${this.itemId}/variationBasePrice`]);
      }
    },
    variationOrderQuantity(value) {
      if (this.quantity !== value) {
        this.quantity = value;
      }
    },
    propQuantity(value) {
      if (!isNaN(value)) {
        this.quantity = value;
      }
    }
  }
});
function extractPropertiesAndSurcharge(orderProperties) {
  let totalSurcharge = 0;
  const orderParams = [];
  orderProperties.forEach(orderProperty => {
    if (!(0,_helper_utils__WEBPACK_IMPORTED_MODULE_9__.isNullOrUndefined)(orderProperty.property.value)) {
      const property = orderProperty.property;
      if (property.valueType === "float" && !(0,_helper_utils__WEBPACK_IMPORTED_MODULE_9__.isNullOrUndefined)(property.value) && property.value.slice(-1) === App.decimalSeparator) {
        property.value = property.value.substr(0, property.value.length - 1);
      }
      totalSurcharge += (orderProperty.surcharge || 0) + (property.surcharge || 0);
      orderParams.push({
        propertyId: property.id,
        type: property.valueType,
        name: property.names.name,
        value: property.value
      });
    }
  });
  return {
    orderParams: orderParams,
    totalSurcharge: totalSurcharge
  };
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=template&id=729fe3ab":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=template&id=729fe3ab ***!
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
  return _c("div", [!_vm.showQuantity && _vm.useLargeScale && _vm.canBeAddedToBasket ? _c("div", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    staticClass: "add-to-basket-lg-container d-none d-lg-block",
    class: {
      "no-pointer-events": _vm.isLoading
    },
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: _vm.$translate("Ceres::Template.singleItemAddToBasket")
    },
    on: {
      click: function ($event) {
        return _vm.addToBasket();
      }
    }
  }, [_c("icon", {
    staticClass: "fa-lg mobile-icon-right",
    attrs: {
      icon: "cart-plus",
      loading: _vm.isLoading
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.showQuantity && _vm.useLargeScale && !_vm.canBeAddedToBasket ? _c("div", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    staticClass: "add-to-basket-lg-container d-none d-lg-block",
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: _vm.$translate("Ceres::Template.itemShowItem")
    },
    on: {
      click: function ($event) {
        return _vm.directToItem();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-right fa-lg d-none d-sm-block"
  })]) : _vm._e(), _vm._v(" "), _vm.showQuantity && !_vm.useLargeScale ? _c("div", {
    staticClass: "d-inline",
    class: {
      "d-lg-none": !_vm.$ceres.isItemView
    }
  }, [_c("div", {
    staticClass: "add-to-basket-container"
  }, [_c("div", {
    staticClass: "quantity-input-container"
  }, [_c("quantity-input", {
    attrs: {
      value: _vm.quantity,
      timeout: 0,
      min: _vm.minimumQuantity,
      max: _vm.maximumQuantity,
      interval: _vm.intervalQuantity,
      "variation-id": _vm.variationId,
      waiting: _vm.isLoading || !_vm.isSalable || !_vm.allVariationsSelected
    },
    on: {
      "quantity-change": _vm.updateQuantity,
      "out-of-stock": _vm.handleButtonState
    }
  })], 1), _vm._v(" "), !_vm.allVariationsSelected || !_vm.isSalable ? _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    staticClass: "btn btn-block btn-primary btn-appearance disabled",
    class: _vm.buttonClasses,
    style: _vm.paddingInlineStyles,
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: _vm.tooltipText
    }
  }, [_c("i", {
    staticClass: "fa fa-shopping-cart",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.singleItemAddToBasket")) + "\n            ")]) : !_vm.buttonLockState ? _c("button", {
    staticClass: "btn btn-block btn-primary btn-appearance",
    class: _vm.buttonClasses,
    style: _vm.paddingInlineStyles,
    attrs: {
      disabled: _vm.isLoading || !_vm.hasPrice
    },
    on: {
      click: function ($event) {
        return _vm.addToBasket();
      }
    }
  }, [_c("icon", {
    attrs: {
      icon: "shopping-cart",
      loading: _vm.isLoading
    }
  }), _vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.singleItemAddToBasket")) + "\n            ")], 1) : _c("button", {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip"
    }],
    staticClass: "btn btn-block btn-primary btn-appearance disabled",
    class: _vm.buttonClasses,
    style: _vm.paddingInlineStyles,
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: _vm._f("translate")("Ceres::Template.singleItemQuantityMax", {
        max: _vm.maximumQuantity
      })
    }
  }, [_c("icon", {
    attrs: {
      icon: "shopping-cart",
      waiting: _vm.isLoading
    }
  }), _vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.singleItemAddToBasket")) + "\n            ")], 1)])]) : _vm._e(), _vm._v(" "), !_vm.showQuantity && !_vm.useLargeScale ? _c("div", {
    staticClass: "d-inline",
    class: {
      "d-lg-none": !_vm.isWishList
    }
  }, [_c("div", {
    staticClass: "btn-group",
    attrs: {
      role: "group",
      "aria-label": "Thumb Control"
    }
  }, [_vm.canBeAddedToBasket ? _c("button", {
    staticClass: "btn btn-primary btn-appearance mobile-width-button",
    class: {
      "no-pointer-events": _vm.isLoading
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function ($event) {
        return _vm.addToBasket();
      }
    }
  }, [_c("icon", {
    staticClass: "fa-lg mobile-icon-right",
    attrs: {
      icon: "shopping-cart",
      loading: _vm.isLoading
    }
  }), _vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.singleItemAddToBasket")) + "\n            ")], 1) : _c("button", {
    staticClass: "btn btn-primary btn-appearance mobile-width-button",
    attrs: {
      type: "button"
    },
    on: {
      click: function ($event) {
        return _vm.directToItem();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-right fa-lg d-none d-sm-block",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.itemShowItem")) + "\n            ")])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/mixins/buttonSizeProperty.mixin.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/app/mixins/buttonSizeProperty.mixin.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonSizePropertyMixin: function() { return /* binding */ ButtonSizePropertyMixin; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);


const BUTTON_SIZES = ["btn-sm", "btn-lg"];
const LEGACY_CLASS_MAP = {
  "sm": "btn-sm",
  "md": "",
  "lg": "btn-lg"
};
const ButtonSizePropertyMixin = {
  props: {
    buttonSize: {
      type: [String, null],
      default: null,
      validator: value => {
        return ["", ...BUTTON_SIZES, ...Object.keys(LEGACY_CLASS_MAP)].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    buttonSizeClass() {
      if (LEGACY_CLASS_MAP.hasOwnProperty(this.buttonSize)) {
        return LEGACY_CLASS_MAP[this.buttonSize];
      }
      return this.buttonSize;
    }
  }
};

/***/ }),

/***/ "./resources/js/src/app/components/basket/AddToBasket.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/app/components/basket/AddToBasket.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddToBasket_vue_vue_type_template_id_729fe3ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddToBasket.vue?vue&type=template&id=729fe3ab */ "./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=template&id=729fe3ab");
/* harmony import */ var _AddToBasket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddToBasket.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddToBasket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddToBasket_vue_vue_type_template_id_729fe3ab__WEBPACK_IMPORTED_MODULE_0__.render,
  _AddToBasket_vue_vue_type_template_id_729fe3ab__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/basket/AddToBasket.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddToBasket.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=template&id=729fe3ab":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=template&id=729fe3ab ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_template_id_729fe3ab__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_template_id_729fe3ab__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddToBasket_vue_vue_type_template_id_729fe3ab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddToBasket.vue?vue&type=template&id=729fe3ab */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/basket/AddToBasket.vue?vue&type=template&id=729fe3ab");


/***/ })

}]);
//# sourceMappingURL=ceres-client-resources_js_src_app_components_basket_AddToBasket_vue.js.map