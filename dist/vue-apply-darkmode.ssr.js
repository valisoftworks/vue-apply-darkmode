'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    watchSystem: {
      type: Boolean,
      default: false
    },
    brightness: {
      type: Number,
      default: 100
    },
    contrast: {
      type: Number,
      default: 90
    },
    sepia: {
      type: Number,
      default: 10
    }
  },
  data: function data() {
    return {
      activeDark: this.dark,
      systemDark: false,
      mq: null
    };
  },
  computed: {
    appearanceSettings: function appearanceSettings() {
      return String(this.brightness).padStart(3, 0) + String(this.contrast).padStart(3, 0) + String(this.sepia).padStart(3, 0);
    }
  },
  watch: {
    activeDark: function activeDark() {
      this.toggleDarkMode();
    },
    systemDark: function systemDark() {
      this.toggleDarkMode();
    },
    appearanceSettings: function appearanceSettings() {
      this.toggleDarkMode();
    }
  },
  mounted: function mounted() {
    if (this.mq === null && window) {
      this.mq = window.matchMedia("(prefers-color-scheme: dark)");
      this.mq.addEventListener("change", this.updateSystemTheme);
    }

    this.toggleDarkMode();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.mq !== null) {
      this.mq.removeEventListener("change", this.updateSystemTheme);
    }
  },
  methods: {
    updateSystemTheme: function updateSystemTheme(update) {
      this.systemDark = update.matches;
    },
    toggleDarkMode: function toggleDarkMode() {
      if (window) {
        var _require = require("darkreader"),
            enableDarkMode = _require.enable,
            disableDarkMode = _require.disable;

        if (this.activeDark || !this.activeDark && this.systemDark) {
          enableDarkMode({
            brightness: this.brightness,
            contrast: this.contrast,
            sepia: this.sepia
          });
        } else disableDarkMode();
      }
    }
  }
};var _hoisted_1 = {
  class: "vue-apply-darkmode"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")]);
}script.render = render;// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('VueApplyDarkmode', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;