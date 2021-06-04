<script>
import { defineComponent } from "vue";
import interpolator from "@/vue-apply-darkmode.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    interpolator,
  },
});
</script>

<template>
  <div id="app">
    <interpolator :dark="true" />
  </div>
</template>
