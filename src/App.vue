<template>
  <div
    id="nav"
    class="bg-atl-9 flex justify-between items-center border-b-2 border-atl-6 h-20"
  >
    <router-link to="/">
      <img src="./assets/logo.png" class="max-h-20" alt="Logo" />
    </router-link>
    <div
      class="text-atl-2 w-1/4 flex justify-evenly items-center font-spline text-xl"
    >
      <router-link to="/documentation">Documentation</router-link>
      <a href="https://discord.gg/ffz84zfaXF" target="_blank" rel="nofollow"
        >Discord</a
      >
      <a href="https://github.com/AtlasFw" target="_blank" rel="nofollow"
        >GitHub</a
      >
    </div>
    <div>
      <button
        class="bg-atl-4 w-32 h-10 mr-2.5 rounded-md text-lg font-spline text-atl-2"
      >
        Soon...
      </button>
    </div>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Spline+Sans:wght@700&display=swap");
</style>
