<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query getReviews {
    reviews {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`);
const reviews = computed(() => result.value?.reviews.data ?? []);
</script>

<template>
  <div class="md:grid md:grid-cols-3 md:gap-4" v-if="result">
    <div v-for="(review, i) in reviews" :key="i" class="rounded shadow-md">
      <div>
        <img
          src="https://via.placeholder.com/150"
          class="max-h-32 object-cover"
        />
      </div>
      <RouterLink :to="`/curries/${review.id}`">{{
        review.attributes.name
      }}</RouterLink>
    </div>
  </div>
</template>
