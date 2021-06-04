import { openBlock, createBlock, renderSlot } from 'vue';

var script = {
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

  data() {
    return {
      activeDark: this.dark,
      systemDark: false,
      mq: null
    };
  },

  computed: {
    appearanceSettings() {
      return String(this.brightness).padStart(3, 0) + String(this.contrast).padStart(3, 0) + String(this.sepia).padStart(3, 0);
    }

  },
  watch: {
    activeDark() {
      this.toggleDarkMode();
    },

    systemDark() {
      this.toggleDarkMode();
    },

    appearanceSettings() {
      this.toggleDarkMode();
    }

  },

  mounted() {
    if (this.mq === null && window) {
      this.mq = window.matchMedia("(prefers-color-scheme: dark)");
      this.mq.addEventListener("change", this.updateSystemTheme);
    }

    this.toggleDarkMode();
  },

  beforeDestroy() {
    if (this.mq !== null) {
      this.mq.removeEventListener("change", this.updateSystemTheme);
    }
  },

  methods: {
    updateSystemTheme(update) {
      this.systemDark = update.matches;
    },

    toggleDarkMode() {
      if (window) {
        const {
          enable: enableDarkMode,
          disable: disableDarkMode
        } = require("darkreader");

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
};

const _hoisted_1 = {
  class: "vue-apply-darkmode"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
}

script.render = render;

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('VueApplyDarkmode', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
