<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">Pomme Patate</RouterLink>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav pe-1">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/achievement" class="nav-link"
            >Achievement</RouterLink
          >
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and  to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>

  <footer class="footer mt-auto py-3 black-bg">
    <div class="container text-center">
      <p class="text-white">
        No Cookies used on this website. <br />
        2024 <i class="fa-regular fa-copyright"></i> Matthieu Gravy - All rights
        reserved.<br />
        Developped by
        <a class="rose-color" href="https://www.linkedin.com/in/matthieugravy/"
          >Matthieu Gravy</a
        >
      </p>
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
