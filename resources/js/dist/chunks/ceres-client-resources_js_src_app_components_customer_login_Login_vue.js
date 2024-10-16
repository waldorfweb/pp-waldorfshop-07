"use strict";
(self["webpackChunkWaldorfshop7"] = self["webpackChunkWaldorfshop7"] || []).push([["resources_js_src_app_components_customer_login_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/buttonSizeProperty.mixin */ "./resources/js/src/app/mixins/buttonSizeProperty.mixin.js");
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/ApiService */ "./resources/js/src/app/services/ApiService.js");
/* harmony import */ var _services_NotificationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/NotificationService */ "./resources/js/src/app/services/NotificationService.js");
/* harmony import */ var _services_ModalService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ModalService */ "./resources/js/src/app/services/ModalService.js");
/* harmony import */ var _services_AutoFocusService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/AutoFocusService */ "./resources/js/src/app/services/AutoFocusService.js");
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/ValidationService */ "./resources/js/src/app/services/ValidationService.js");
/* harmony import */ var _helper_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helper/utils */ "./resources/js/src/app/helper/utils.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_0__.ButtonSizePropertyMixin],
  props: {
    backlink: {
      type: String
    },
    modalElement: {
      type: String
    },
    hasToForward: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      password: "",
      username: "",
      loginFields: [],
      isDisabled: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loginFields = this.$refs.loginForm.querySelectorAll(".input-unit");
      _services_AutoFocusService__WEBPACK_IMPORTED_MODULE_4__["default"].triggerAutoFocus();
    });
  },
  watch: {
    password(val, oldVal) {
      this.resetError();
    },
    username(val, oldVal) {
      this.resetError();
    }
  },
  computed: {
    urlRegistration() {
      return App.urls.registration;
    }
  },
  methods: {
    /**
     * Open the login modal
     */
    showLogin() {
      _services_ModalService__WEBPACK_IMPORTED_MODULE_3__["default"].findModal(document.getElementById(this.modalElement)).show();
    },
    validateLogin() {
      _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__["default"].validate($("#login-form-" + this._uid)).done(() => {
        this.sendLogin();
      }).fail(invalidFields => {
        _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__["default"].markInvalidFields(invalidFields, "error");
      });
    },
    /**
     * Send the login data
     */
    sendLogin() {
      this.isDisabled = true;
      _services_ApiService__WEBPACK_IMPORTED_MODULE_1__["default"].post("/rest/io/customer/login", {
        email: this.username,
        password: this.password
      }, {
        supressNotifications: true
      }).done(response => {
        _services_ApiService__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(response);
        _services_NotificationService__WEBPACK_IMPORTED_MODULE_2__["default"].success(this.$translate("Ceres::Template.loginSuccessful")).closeAfter(3000);
        if (this.backlink !== null && this.backlink) {
          location.assign(decodeURIComponent(this.backlink));
        } else if (this.hasToForward) {
          location.assign(location.origin);
        } else {
          location.reload();
        }
      }).fail(response => {
        this.isDisabled = false;
        switch (response.error.code) {
          case 401:
            this.loginFields.forEach(element => element.classList.add("has-login-error"));
            let translationKey = "Ceres::Template.loginFailed";
            if (response.error.message.length > 0 && response.error.message === "user is blocked") {
              translationKey = "Ceres::Template.loginBlocked";
            }
            _services_NotificationService__WEBPACK_IMPORTED_MODULE_2__["default"].error(this.$translate(translationKey)).closeAfter(10000);
            break;
          default:
            return;
        }
      });
    },
    showResetPwdView() {
      this.resetError();
      this.$store.dispatch("loadComponent", "forgot-password-modal");
      Vue.nextTick(() => {
        let modalDOM = document.querySelector('#resetPwd');
        let modalVue = (0,_helper_utils__WEBPACK_IMPORTED_MODULE_6__.getContainingComponent)(modalDOM);
        modalVue.$data.username = this.username;
        let showModal = () => _services_ModalService__WEBPACK_IMPORTED_MODULE_3__["default"].findModal(modalDOM).show();
        if (this.modalElement) {
          _services_ModalService__WEBPACK_IMPORTED_MODULE_3__["default"].findModal(document.getElementById(this.modalElement)).hide().then(showModal);
        } else {
          showModal();
        }
      });
    },
    resetError() {
      this.loginFields.forEach(element => element.classList.remove("has-login-error"));
      _services_ValidationService__WEBPACK_IMPORTED_MODULE_5__["default"].unmarkAllFields("#login-form-" + this._uid);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=0f0e37b8":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=0f0e37b8 ***!
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
    staticClass: "login-pwd-reset"
  }, [_c("form", {
    ref: "loginForm",
    attrs: {
      id: "login-form-" + _vm._uid,
      method: "post"
    }
  }, [_c("div", {
    class: {
      "modal-body": _vm.modalElement
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "input-unit",
    attrs: {
      "data-validate": "mail"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.username,
      expression: "username"
    }],
    attrs: {
      "data-testing": "email-login",
      type: "email",
      name: "email",
      autocomplete: "email",
      id: "email" + _vm._uid,
      "data-autofocus": ""
    },
    domProps: {
      value: _vm.username
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.username = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "email" + _vm._uid
    }
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.loginEmail")) + "*")])]), _vm._v(" "), _c("span", {
    staticClass: "error-msg"
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.loginEnterConfirmEmail")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "input-unit",
    class: {
      "no-bottom": _vm.modalElement
    },
    attrs: {
      "data-validate": "text"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    attrs: {
      "data-testing": "password-login",
      type: "password",
      name: "password",
      autocomplete: "current-password",
      id: "password" + _vm._uid
    },
    domProps: {
      value: _vm.password
    },
    on: {
      input: function ($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      for: "password" + _vm._uid
    }
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.loginPassword")) + "*")])]), _vm._v(" "), _c("span", {
    staticClass: "error-msg"
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.loginEmptyPassword")))])])])]), _vm._v(" "), _c("div", {
    class: {
      "modal-footer": _vm.modalElement
    }
  }, [_c("div", {
    staticClass: "w-100"
  }, [_c("div", {
    staticClass: "row justify-content-between flex-column flex-lg-row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("a", {
    staticClass: "small text-appearance",
    attrs: {
      href: "javascript:void(0)"
    },
    on: {
      click: _vm.showResetPwdView
    }
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.loginForgotPassword")) + "?")])]), _vm._v(" "), _c("div", {
    staticClass: "col d-flex justify-content-between"
  }, [_vm._t("extend-overlay-buttons"), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary btn-appearance btn-medium",
    class: [{
      "float-right": !_vm.modalElement
    }, _vm.buttonSizeClass],
    attrs: {
      "data-testing": "submit-login",
      disabled: _vm.isDisabled
    },
    on: {
      click: function ($event) {
        $event.preventDefault();
        return _vm.validateLogin.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$translate("Ceres::Template.login")) + "\n                            "), _c("icon", {
    attrs: {
      icon: "user",
      loading: _vm.isDisabled
    }
  })], 1)], 2)])]), _vm._v(" "), _vm.modalElement ? _c("div", {
    staticClass: "w-100 text-center"
  }, [_c("hr"), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.$translate("Waldorfshop7::Template.noAccountYet")))]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-outline-primary",
    attrs: {
      href: _vm.urlRegistration
    }
  }, [_c("i", {
    staticClass: "fa fa-user-plus ml-1",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(_vm._s(_vm.$translate("Ceres::Template.regRegisterAccount")) + "\n                ")])]) : _vm._e()])])]);
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

/***/ "./resources/js/src/app/components/customer/login/Login.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/app/components/customer/login/Login.vue ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_0f0e37b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0f0e37b8 */ "./resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=0f0e37b8");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_0f0e37b8__WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_0f0e37b8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/customer/login/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/customer/login/Login.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=0f0e37b8":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=0f0e37b8 ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0f0e37b8__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0f0e37b8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0f0e37b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=0f0e37b8 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/customer/login/Login.vue?vue&type=template&id=0f0e37b8");


/***/ })

}]);
//# sourceMappingURL=ceres-client-resources_js_src_app_components_customer_login_Login_vue.js.map