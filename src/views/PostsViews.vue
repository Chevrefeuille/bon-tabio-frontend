<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const { result: postsResults } = useQuery(gql`
  query getPosts {
    posts {
      data {
        id
        attributes {
          title
          date
        }
      }
    }
  }
`);
const posts = computed(() => postsResults.value?.posts.data ?? []);
</script>

<template>
  <div class="flex flex-col" v-if="posts">
    <RouterLink v-for="(post, i) in posts" :key="i" :to="`/posts/${post.id}`">
      <p class="text-xl">{{ post.attributes.title }}</p>
    </RouterLink>
  </div>
</template>
