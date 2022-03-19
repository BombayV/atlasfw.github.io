<template>
  <iframe class="w-full h-full" loading="eager" :src="web"></iframe>
</template>

<script>
export default {
  name: "Documentation",
  data() {
    return {
      web: "https://atlasfw-docs.pages.dev/en/intro",
    };
  },
  mounted() {
    this.web = "https://atlasfw-docs.pages.dev/en/intro";
    const lang = localStorage.getItem("lang") || "us";
    if (lang !== "us") {
      this.web = `https://atlasfw-docs.pages.dev/${lang}/intro`;
    }
  },
};
</script>