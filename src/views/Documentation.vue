<template>
  <iframe class="w-full h-full" loading="eager" :src="web"></iframe>
</template>

<script>
export default {
  name: "Documentation",
  data() {
    return {
      web: "https://atlasfw-docs.pages.dev/",
    };
  },
  mounted() {
    this.web = "https://atlasfw-docs.pages.dev/";
    const lang = localStorage.getItem("lang") || "us";
    if (lang !== "us") {
      this.web = `https://atlasfw-docs.pages.dev/${lang}/`;
    }
  },
};
</script>
