<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import gql from "graphql-tag";

const base_url = import.meta.env.VITE_BACKEND_URL;

const { result: reviewsResult } = useQuery(gql`
  query getReviews {
    reviews {
      data {
        id
        attributes {
          name
          date
          image {
            data {
              id
            }
          }
        }
      }
    }
  }
`);
const reviews = computed(() => reviewsResult.value?.reviews.data ?? []);

const { result: fileResults } = useQuery(gql`
  query getUploads {
    uploadFiles {
      data {
        id
        attributes {
          formats
        }
      }
    }
  }
`);
const files = computed(() => fileResults.value?.uploadFiles.data ?? []);

const getAllFormats = (imageID: number) => {
  if (!files.value.length) {
    return undefined;
  }
  return files.value.find((file: any) => file.id == imageID).attributes.formats;
};
</script>

<template>
  <div
    class="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4"
    v-if="reviews"
  >
    <RouterLink
      v-for="(review, i) in reviews"
      :key="i"
      :to="`/curries/${review.id}`"
    >
      <div class="relative h-48 rounded-lg bg-red-300">
        <img
          v-if="getAllFormats(review.attributes.image.data.id)"
          :src="`${base_url}${
            getAllFormats(review.attributes.image.data.id).small.url
          }`"
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
