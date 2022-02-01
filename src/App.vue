<template>
  <nav
    class="flex justify-between items-center w-full h-20 bg-atl-7 border-b-4 border-atl-6"
  >
    <svg
      @click="toggleSidebar"
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 text-atl-2 mx-4 p-1 cursor-pointer rounded transition-colors duration-200 hover:bg-atl-6 transform hover:scale-105"
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

    <!--Sidebar-->
    <div
      class="sidebar fixed h-screen w-56 bg-atl-0 z-10 transition-transform duration-200 origin-center transform top-0 -translate-x-56"
    >
      <div class="flex flex-col items-center justify-between h-full">
        <div
          class="flex justify-start items-center w-full h-20 bg-atl-7 border-b-4 border-atl-6"
        >
          <svg
            @click="toggleSidebar"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 p-1 text-atl-2 mx-4 cursor-pointer rounded hover:bg-atl-6 transition-colors duration-200 transform hover:scale-105"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div
          class="flex flex-col items-center justify-evenly text-atl-2 text-xl font-spline mt-4"
        >
          <router-link class="text-shadow-black" to="/">Home</router-link>
          <a class="text-shadow-black" href="" target="_blank" rel="nofollow"
            >Discord</a
          >
          <router-link class="text-shadow-black" to="/documentation"
            >Documentation</router-link
          >
          <a
            class="text-shadow-black"
            href="https://github.com/AtlasFw"
            target="_blank"
            rel="nofollow"
            >GitHub</a
          >
        </div>
        <div class="flex flex-col items-center justify-evenly">
          <img src="./assets/us.svg" alt="Flag" class="w-12 mb-2" />
          <span class="mb-2 text-atl-2 font-spline">Copyright © 2022</span>
        </div>
      </div>
    </div>
  </nav>
  <router-view />

  <button
    @click="toggleDarkMode"
    class="fixed w-9 h-9 bg-atl-8 bottom-2 left-2 rounded cursor-pointer focus:ring-3 focus:ring-atl-3 hover:bg-atl-4 transition-all duration-200"
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
  </button>
</template>

<script>
import BasicButton from "@/components/BasicButton";
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
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: #fafafa;
}
</style>
