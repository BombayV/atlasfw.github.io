<template>
  <nav
    class="flex justify-between items-center w-full h-20 bg-atl-7 border-b-4 border-atl-6"
  >
    <svg
      @click="toggleSidebar"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-atl-2 mx-4 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    <basic-button
      class="w-1/6 h-2/4 mr-2.5 cursor-not-allowed"
      btn-text="Soon..."
    ></basic-button>
  </nav>
  <div
    class="sidebar fixed h-full w-56 bg-atl-0 z-10 transition-all duration-200 origin-center transform -translate-x-56"
  >
    <div class="flex flex-col items-center justify-between">

      <div></div>
      <div>

      </div>
    </div>
  </div>
  <router-view />

  <div
    @click="toggleDarkMode"
    class="fixed w-9 h-9 bg-atl-8 bottom-2 left-2 rounded cursor-pointer"
  >
    <div class="flex justify-center items-center h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-atl-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import BasicButton from "@/components/basicButton";
import { ref } from "vue";
export default {
  name: "App",
  components: { BasicButton },
  setup() {
    const html = document.querySelector("html");
    const darkMode = ref(false);
    const activeSidebar = ref(true);

    const toggleSidebar = () => {
      const sidebar = document.querySelector(".sidebar");
      activeSidebar.value = !activeSidebar.value;
      if (activeSidebar.value) {
        sidebar.classList.add("-translate-x-56");
      } else {
        sidebar.classList.remove("-translate-x-56");
      }
    };

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      darkMode.value
        ? html.classList.add("dark")
        : html.classList.remove("dark");
    };
    return {
      toggleDarkMode,
      toggleSidebar,
      BasicButton,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@600;700&display=swap");

body {
  background-color: #fafafa;
}
</style>