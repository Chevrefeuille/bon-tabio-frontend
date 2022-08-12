<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderNav from "./components/HeaderNav.vue";
</script>

<template>
  <HeaderNav />
  <div id="content" class="container mx-auto py-6">
    <RouterView />
  </div>
</template>

<style scoped></style>
