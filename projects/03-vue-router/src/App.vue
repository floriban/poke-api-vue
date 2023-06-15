<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Bootstrap" width="30" height="24" />
        PokeApi
      </router-link>

      <div>
        <router-link class="btn btn-outline-success me-2" to="/"><i class="fa-solid fa-house-chimney"></i>
          Home</router-link>
        <router-link class="btn btn-outline-success me-2" to="/pokemons"><i class="fa-solid fa-dragon"></i>
          Pokemons</router-link>
        <router-link class="btn btn-outline-success" to="/favoritos"><i class="fa-solid fa-heart"></i>
          Favoritos</router-link>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>
