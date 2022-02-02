<template>
  <nav
    class="flex justify-between items-center w-full h-20 bg-atl-7 border-b-4 border-atl-6 overflow-hidden z-30"
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
    <div class="flex justify-end items-center h-full w-80">
      <img
        ref="logoTwo"
        @click="toggleLanguage"
        src="./assets/flags/us.svg"
        alt="Flag"
        class="w-12 h-auto mr-3 cursor-pointer hidden md:flex"
      />
      <basic-button
        class="w-40 h-2/4 mr-2.5 cursor-not-allowed text-shadow-black font-semibold"
        :btn-text="$t('COMING_SOON')"
      ></basic-button>
    </div>

    <!--Sidebar-->
    <div
      ref="sidebar"
      class="sidebar fixed h-screen w-56 bg-atl-0 z-10 transition-transform duration-200 origin-center transform top-0 -translate-x-56 z-30"
    >
      <div
        class="flex flex-col items-center justify-between h-full border-r-4 border-atl-6"
      >
        <div class="flex justify-between items-center w-full h-20 font-medium">
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
          <span class="font-spline text-xl mr-4 text-atl-2 underline">{{
            $t("MENU")
          }}</span>
        </div>
        <div
          class="flex flex-col items-center justify-evenly text-atl-2 text-xl font-spline mt-4"
        >
          <router-link class="text-shadow-black font-semibold" to="/">{{
            $t("HOME")
          }}</router-link>
          <a
            class="text-shadow-black font-semibold"
            href=""
            target="_blank"
            rel="nofollow"
            >Discord</a
          >
          <router-link
            class="text-shadow-black font-semibold"
            to="/documentation"
            >{{ $t("DOCUMENTATION") }}</router-link
          >
          <a
            class="text-shadow-black font-semibold"
            href=""
            target="_blank"
            rel="nofollow"
            >GitHub</a
          >
        </div>
        <div class="flex flex-col items-center justify-evenly">
          <img
            ref="logo"
            @click="toggleLanguage"
            src="./assets/flags/us.svg"
            alt="Flag"
            class="w-12 mb-2 cursor-pointer flex md:hidden"
          />
          <span class="mb-4 text-atl-2 font-spline">Copyright © 2022</span>
        </div>
      </div>
    </div>
  </nav>

  <transition name="slide-fade">
    <div
      v-show="chooseLanguage"
      class="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center h-72 w-80 bg-atl-10 rounded border-atl-6 ring-1 ring-atl-6 xl:w-144"
    >
      <p
        class="text-shadow-black text-atl-2 text-xl mt-3 font-spline w-full text-center border-atl-6 border-b-2 h-10 font-bold"
      >
        {{ $t("CHOOSE_LANGUAGE") }}
      </p>
      <div
        class="scrollbar flex flex-col justify-content items-center w-full overflow-y-auto h-60 mb-4 mt-4 xl:flex-row xl:flex-1 xl:justify-around xl:flex-wrap xl:w-5/6 xl:m-3 xl:h-full"
      >
        <button
          @click="setLanguage(locale.lang)"
          class="flex flex-col justify-content items-center w-48 rounded transition-colors duration-250 hover:bg-atl-6 xl:w-1/3"
          v-for="locale in locales"
          :key="locale.lang"
        >
          <img
            :src="require(`./assets/flags/${locale.lang}.svg`)"
            alt="Flag"
            class="w-24 mb-2 cursor-pointer mt-4"
          />
          <span class="text-atl-2 font-spline font-semibold">{{
            locale.footer
          }}</span>
          <span class="text-atl-11 font-medium mb-2.5"
            >{{ `(${locale.lang.toUpperCase()})` }}
          </span>
        </button>
      </div>
    </div>
  </transition>

  <!--  <button-->
  <!--    @click="toggleDarkMode"-->
  <!--    class="fixed flex justify-center items-center w-9 h-9 bg-atl-8 bottom-2 left-2 rounded cursor-pointer focus:ring-3 focus:ring-atl-3 hover:bg-atl-4 transition-all duration-200 z-10"-->
  <!--  >-->
  <!--    <svg-->
  <!--      xmlns="http://www.w3.org/2000/svg"-->
  <!--      class="h-5 w-5 text-atl-2"-->
  <!--      fill="none"-->
  <!--      viewBox="0 0 24 24"-->
  <!--      stroke="currentColor"-->
  <!--    >-->
  <!--      <path-->
  <!--        stroke-linecap="round"-->
  <!--        stroke-linejoin="round"-->
  <!--        stroke-width="2"-->
  <!--        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"-->
  <!--      />-->
  <!--    </svg>-->
  <!--  </button>-->
  <router-view />
</template>

<script>
import BasicButton from "@/components/BasicButton";
import { ref, onMounted } from "vue";
import i18n from "@/main";
export default {
  name: "App",
  components: { BasicButton },
  setup() {
    const locales = ref([
      { lang: "us", footer: "English" },
      { lang: "es", footer: "Español" },
      { lang: "br", footer: "Português" },
      { lang: "fr", footer: "Français" },
    ]);
    const html = document.querySelector("html");
    const sidebar = ref(null);
    const logo = ref(null);
    const logoTwo = ref(null);
    const darkMode = ref(false);
    const chooseLanguage = ref(false);

    onMounted(() => {
      const lang = localStorage.getItem("lang") || "us";
      logo.value.src = require(`./assets/flags/${lang}.svg`);
      logoTwo.value.src = require(`./assets/flags/${lang}.svg`);
    });

    const setLanguage = (lang) => {
      i18n.global.locale = lang;
      localStorage.setItem("lang", lang);
      chooseLanguage.value = false;
      logoTwo.value.src = require(`./assets/flags/${lang}.svg`);
      logo.value.src = require(`./assets/flags/${lang}.svg`);
    };
    const toggleSidebar = () => {
      if (chooseLanguage.value) return;
      if (!sidebar.value.classList.contains("-translate-x-56")) {
        sidebar.value.classList.add("-translate-x-56");
      } else {
        sidebar.value.classList.remove("-translate-x-56");
      }
    };
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      darkMode.value
        ? html.classList.add("dark")
        : html.classList.remove("dark");
    };
    const toggleLanguage = () => {
      if (!sidebar.value.classList.contains("-translate-x-56")) {
        sidebar.value.classList.add("-translate-x-56");
      }
      chooseLanguage.value = !chooseLanguage.value;
    };
    return {
      logo,
      logoTwo,
      sidebar,
      locales,
      chooseLanguage,
      toggleDarkMode,
      toggleLanguage,
      toggleSidebar,
      setLanguage,
      BasicButton,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;600;700&display=swap");

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

.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
