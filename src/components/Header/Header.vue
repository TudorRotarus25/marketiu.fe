<template>
  <header class="top-bar">
    <div class="logo">
      <a href="/">
        <img src="../../assets/logo-white.png" alt="Marketiu">
      </a>
    </div>
    <a class="mobile-menu-button">
      <i class="fa fa-bars" aria-hidden="true"/>
    </a>
    <ul class="navigation-menu">
      <i class="fa fa-times close-navigation-button" aria-hidden="true"></i>
      <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Hello' }">Services</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Hello' }">Clients</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Hello' }">Blog</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Hello' }">About Us</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Hello' }">Contact</router-link>
      </li>
    </ul>
  </header>
</template>
<script src="./Header.js"></script>
<style
  src="./Header.scss"
  lang="scss"
  scoped
></style>
