<template>
  <div class="fixed w-full h-full mt-20">
    <iframe
      loading="eager"
      class="relative w-full h-custom"
      :src="web"
    ></iframe>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "Documentation",
  setup() {
    const web = ref("https://atlasfw-docs.pages.dev/");
    onMounted(() => {
      const lang = localStorage.getItem("lang") || "us";
      if (lang !== "us") {
        web.value = `https://atlasfw-docs.pages.dev/${lang}/`;
      }
    });
    return {
      web,
    };
  },
};
</script>
