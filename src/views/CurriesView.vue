<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const url = import.meta.env.VITE_BACKEND_URL;
const { result } = useQuery(gql`
  query getReviews {
    reviews {
      data {
        id
        attributes {
          name
          date
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
const reviews = computed(() => result.value?.reviews.data ?? []);
</script>

<template>
  <div class="md:grid md:grid-cols-4 md:gap-4" v-if="result">
    <RouterLink
      v-for="(review, i) in reviews"
      :key="i"
      :to="`/curries/${review.id}`"
    >
      <div class="relative h-48 rounded-lg bg-red-300">
        <img
          :src="`${url}${review.attributes.image.data.attributes.url}`"
          class="h-full w-full rounded-lg object-cover"
        />
        <div
          class="absolute inset-x-0 bottom-0 rounded-lg bg-gradient-to-t from-black p-3"
        >
          <p class="text-lg font-medium text-white">
            {{ review.attributes.name }}
          </p>
          <p class="text-slate-100">{{ review.attributes.date }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
