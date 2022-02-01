<template>
  <button
    type="button"
    class="bg-atl-3 rounded text-atl-2 font-spline border-r-2 border-b-2 border-atl-4"
  >
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "BasicButton",
  props: {
    btnText: {
      type: String,
      default: "Button",
    },
  },
};
</script>
