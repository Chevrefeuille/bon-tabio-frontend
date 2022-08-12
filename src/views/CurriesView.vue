<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query getReviews {
    reviews {
      data {
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
    <div v-for="(review, i) in reviews" :key="i" class="shadow-md">
      {{ review.attributes.name }}
    </div>
  </div>
</template>
