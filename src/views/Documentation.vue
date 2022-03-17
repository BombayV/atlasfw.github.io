<template>
  <iframe class="w-full h-full" loading="eager" :src="web"></iframe>
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
