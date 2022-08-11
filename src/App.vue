<script setup lang="ts">
import { watch } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query getPosts {
    posts {
      data {
        attributes {
          title
        }
      }
    }
  }
`);
watch(result, (value) => {
  console.log(value);
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
