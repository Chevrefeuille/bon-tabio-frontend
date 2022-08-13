<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const views = [
  { name: "Posts", route: "/posts" },
  { name: "Curries", route: "/curries" },
];
</script>

<template>
  <Popover>
    <PopoverButton
      class="inline-flex aspect-square items-center justify-center rounded-md p-4 text-xl focus:outline-none md:hidden"
    >
      <span class="sr-only">Open menu</span>
      <font-awesome-icon icon="fa-solid fa-bars" />
    </PopoverButton>
    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute inset-x-0 top-0 z-20 origin-top-right transform bg-white p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-opacity-10"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>Bon-tabio</div>
              <div class="-mr-2">
                <PopoverButton
                  class="inline-flex aspect-square items-center justify-center rounded-md p-2 focus:outline-none"
                >
                  <span class="sr-only">Close menu</span>
                  <font-awesome-icon icon="fa-solid fa-xmark" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <RouterLink
                  v-for="(view, i) in views"
                  :key="i"
                  :to="view.route"
                  class="text-base"
                  active-class="underline underline-offset-8 decoration-2 font-extrabold"
                >
                  <PopoverButton>{{ view.name }}</PopoverButton>
                </RouterLink>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>

  <header class="sticky top-0 z-10 hidden bg-white p-6 shadow-md md:block">
    <nav class="mx-auto flex items-center justify-between px-6">
      <RouterLink class="text-base font-medium" to="/">Bon-tabio</RouterLink>
      <div class="flex justify-around space-x-10">
        <RouterLink
          v-for="(view, i) in views"
          :key="i"
          class="text-base font-medium"
          active-class="underline underline-offset-8 decoration-2  font-extrabold"
          :to="view.route"
          >{{ view.name }}</RouterLink
        >
      </div>
      <div></div>
    </nav>
  </header>
</template>
