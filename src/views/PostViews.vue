<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const route = useRoute();

const { result } = useQuery(
  gql`
    query getPost($id: ID!) {
      post(id: $id) {
        data {
          attributes {
            title
            content
          }
        }
      }
    }
  `,
  { id: route.params.id }
);
const post = computed(() => result.value?.post.data.attributes ?? []);
</script>

<template>
  <section class="mx-auto max-w-4xl">
    <h1 class="text-3xl font-bold">
      {{ post.name }}
    </h1>

    <article class="prose max-w-none" v-if="post.content">
      <vue-markdown :source="post.content" />
    </article>
  </section>
</template>
