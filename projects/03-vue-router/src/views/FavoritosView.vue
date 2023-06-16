<script setup>
import { useFavoritosStore } from '@/store/favoritos.js'

const useFavoritos = useFavoritosStore()
const { favoritos, remove } = useFavoritos
</script>

<template>
    <h1>Favoritos</h1>

    <div class="row">
        <div class="col-md-12" v-if="favoritos.length === 0">
            <div class="alert alert-primary">
                No existe favoritos agregados
            </div>
        </div>

        <div class="col-md-2 mb-2" v-for="(poke, index) in favoritos " :key="index">
            <div class="card">
                <a href="javascript:;" @click="remove(index)" class="quitar-favorito"><i
                        class="fa-solid fa-circle-minus"></i></a>

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
    width: 80%;
    margin: 0 auto;
}

.card {
    position: relative;
}

.card-body {
    text-transform: uppercase;
    text-align: center;
    padding: 0;
}

.card-body a {
    text-decoration: none;
    background-color: gray;
    color: white;
    display: block;
    margin: 0;
    border-radius: 0 0 4px 4px;
    padding: 4px 0px;
}

.card-body a:hover {
    background-color: rgb(88, 88, 88);
}

.quitar-favorito {
    position: absolute;
    font-size: 25px;
    color: rgb(216, 71, 71);
    right: -8px;
    top: -12px;
}
</style>