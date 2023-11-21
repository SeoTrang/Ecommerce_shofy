<script setup>
import Loading from './components/loading/Loading.vue';

import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const loading = computed(() => store.state.loading);
</script>

<template>
  <router-view></router-view>
  <Loading v-if="loading"/>
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <!-- <button class="btn btn-primary">Primary Button</button> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>

</style>
