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
  },
};
</script>

<style
  src="./App.scss"
  lang="scss"
></style>
