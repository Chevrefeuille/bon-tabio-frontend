<script setup lang="ts">
import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const route = useRoute();

const { result } = useQuery(
  gql`
    query getReview($id: ID!) {
      review(id: $id) {
        data {
          attributes {
            name
            content
          }
        }
      }
    }
  `,
  { id: route.params.id }
);
const review = computed(() => result.value?.review.data.attributes ?? []);
</script>

<template>
  <section class="mx-auto max-w-4xl">
    <h1 class="text-3xl font-bold">
      {{ review.name }}
    </h1>

    <article class="prose max-w-none" v-if="review.content">
      <vue-markdown :source="review.content" />
    </article>
  </section>
</template>
