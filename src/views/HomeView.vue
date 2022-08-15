<script setup lang="ts"></script>

<template>
  <div class="h-full w-full">
    <div class="pt-12 md:flex">
      <div class="mx-auto md:w-2/3 md:max-w-xl">
        <h1 class="text-6xl font-bold text-pink-900">Welcome to our blog</h1>
        <p class="pt-8">
          We are enthusiastic about food and we are happy to share it with you.
          Here you will find restaurant reviews, blog posts, recipes and more.
          "Bon" means good in french (as in "Bon voyage", have a good trip) and
          "Tabio" is japanese for trip ("旅を").
        </p>
      </div>
      <div class="relative md:w-1/3">
        <div
          class="absolute -top-12 -right-12 -z-10 h-96 w-96 rounded-full bg-purple-300 opacity-50 blur-xl"
        ></div>
        <div
          class="absolute -left-24 top-20 -z-10 h-96 w-96 rounded-full bg-yellow-300 opacity-50 blur-xl"
        ></div>
        <div
          class="absolute left-9 top-64 -z-10 h-96 w-96 rounded-full bg-pink-300 opacity-50 blur-xl"
        ></div>
        <img
          class="rounded-[6rem] shadow-2xl"
          src="https://res.cloudinary.com/adrienscloud/image/upload/v1660555815/bon-tabio/home-food_oue4ag.jpg"
        />
      </div>
    </div>
  </div>
</template>
