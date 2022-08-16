<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const base_url = import.meta.env.VITE_BACKEND_URL;

const { result: postsResults } = useQuery(gql`
  query getPosts {
    posts {
      data {
        id
        attributes {
          title
          date
          short
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`);
const posts = computed(() => postsResults.value?.posts.data ?? []);
</script>

<template>
  <div class="flex flex-col space-y-8" v-if="posts">
    <RouterLink v-for="(post, i) in posts" :key="i" :to="`/posts/${post.id}`">
      <div class="flex max-w-2xl justify-between">
        <div class="w-3/4 p-4">
          <p class="text-xl font-bold text-pink-900">
            {{ post.attributes.title }}
          </p>
          <p class="text-gray-500">{{ post.attributes.date }}</p>
          <p class="text-gray-500">{{ post.attributes.short }}</p>
        </div>
        <div class="w-1/4">
          <img
            class="h-32 w-full object-cover"
            :src="`${base_url}${post.attributes.image.data.attributes.url}`"
          />
        </div>
      </div>
    </RouterLink>
  </div>
</template>
