<script setup>
import { ref, onMounted } from 'vue';

import BlogPost from './components/BlogPost.vue';
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

const loading = ref(true)
const cantidad = 10
const inicio = ref(0)
const fin = ref(cantidad)

const posts = ref([]);
const favorito = ref('Sin elección')

const cambiarFavorito = (title) => {
  favorito.value = title
}

const pagAnt = () => {
  inicio.value -= cantidad
  fin.value -= cantidad
}

const pagSig = () => {
  inicio.value += cantidad
  fin.value += cantidad
}

// ASYNC Y AWAIT
onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (error) {
    console.log(e)
  } finally {
    loading.value = false
  }
})

// VERSION FETCH
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => posts.value = json)
//   .finally(() => (loading.value = false))

</script>

<template>
  <LoadingSpinner class="mt-5" v-if="loading" />

  <div class="container" v-else>
    <h1>APP</h1>
    <h2>Mi post Favorito: {{ favorito }}</h2>

    <PaginatePost class="mb-2" @pagAnt="pagAnt" @pagSig="pagSig" :valorIni="inicio" :valorFin="fin"
      :cantidadTotal="posts.length" />

    <BlogPost v-for="post in posts.slice(inicio, fin)" :key="post.id" :id="post.id" :title="post.title"
      :description="post.body" @cambiarFavoritoNombre="cambiarFavorito">
    </BlogPost>
  </div>
</template>