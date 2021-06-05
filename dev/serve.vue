<script>
import { defineComponent } from "vue";
import interpolator from "@/vue-apply-darkmode.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    interpolator,
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode ? false : true;
    },
  },
});
</script>

<template>
  <div id="app">
    <interpolator :dark="isDarkMode" />
    <button @click="toggleDarkMode">Toggle</button>
  </div>
</template>
