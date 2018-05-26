<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.button {
  padding: 1em;
  border: 1px solid #8c0010;
  background: transparent;
  color: #8c0010;
  transition: 0.2s;
  cursor: pointer;
}

.button:hover {
  background: #8c0010;
  color: #fff;
}

#app {
  font-size: 16px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
