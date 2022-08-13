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
  <section>
    <h1>
      {{ review.name }}
    </h1>

    <article class="prose prose-slate" v-if="review.content">
      <vue-markdown :source="review.content" />
    </article>
  </section>
</template>
