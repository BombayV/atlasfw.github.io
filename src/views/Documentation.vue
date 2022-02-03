<template>
  <div class="relative w-full h-screen">
    <iframe
      loading="eager"
      class="w-full h-screen"
      :src="web"
    ></iframe>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "Documentation",
  setup() {
    const web = ref('https://atlasfw-docs.pages.dev/')
    onMounted(() => {
      const lang = localStorage.getItem("lang") || "us";
      if (lang !== "us") {
        web.value = `https://atlasfw-docs.pages.dev/${lang}/`;
      }
    });
    return {
      web
    };
  },
};
</script>
