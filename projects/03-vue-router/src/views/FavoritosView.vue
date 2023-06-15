<script setup>
import { useFavoritosStore } from '@/store/favoritos.js'

const useFavoritos = useFavoritosStore()
const { favoritos } = useFavoritos
</script>

<template>
    <h1>Favoritos</h1>

    <div class="row">
        <div class="col-md-2" v-for="(poke, index) in  favoritos " :key="index">
            <div class="card" style="width: 18rem;">
                <img :src="poke.sprites.front_default" class="card-img-top" :alt="poke.forms[0].name">
                <div class="card-body">
                    <router-link class="card-title" :to="`/pokemons/${poke.forms[0].name}`">{{ poke.forms[0].name
                    }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 50%;
    margin: 0 auto;
}

.card-body {
    text-transform: uppercase;
    text-align: center;
}
</style>