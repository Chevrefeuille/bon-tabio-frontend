<script setup lang="ts"></script>

<template>
  <div>
    <div class="pt-6 md:flex">
      <div class="mx-auto px-8 pt-12 md:w-1/2 md:max-w-xl">
        <h1 class="text-6xl font-bold text-pink-900">Welcome to our blog</h1>
        <p class="pt-8">
          We are <span class="italic">very</span> enthusiastic about food and we
          are happy to share it with you. Here you will find restaurant reviews,
          blog posts, recipes and more.
          <span class="font-bold text-pink-900">Bon</span> means good in french
          (as in "Bon voyage") and
          <span class="font-bold text-pink-900">Tabio</span> ("旅を") is
          japanese for trip.
        </p>
      </div>
      <div class="relative px-8 md:w-1/2">
        <div
          class="absolute -top-2 -right-12 -z-10 h-72 w-72 rounded-full bg-purple-300 opacity-50 blur-xl"
        ></div>
        <div
          class="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-yellow-300 opacity-50 blur-xl"
        ></div>
        <div
          class="absolute left-9 top-64 -z-10 h-72 w-72 rounded-full bg-pink-900 opacity-50 blur-xl"
        ></div>
        <img
          class="mx-auto max-h-[28rem] rounded-[6rem] shadow-2xl"
          src="https://res.cloudinary.com/adrienscloud/image/upload/v1660555815/bon-tabio/home-food_oue4ag.jpg"
        />
      </div>
    </div>
  </div>
</template>
