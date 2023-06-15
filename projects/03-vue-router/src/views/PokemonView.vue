<script setup>
import { useRoute, useRouter } from "vue-router";
import { useFavoritosStore } from '@/store/favoritos.js'

import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { useGetData } from '@/composables/getData.js'

const { data, getData, loading } = useGetData()

const route = useRoute();
const router = useRouter();
const useFavoritos = useFavoritosStore()

const { add, favoritos } = useFavoritos

const back = () => {
    router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>
    <LoadingSpinner v-if="loading" />

    <template v-else>
        <div v-if="data">
            <h1>Pokemon name: {{ $route.params.name }}</h1>

            <div class="btn-group">
                <button class="btn btn-outline-success" @click="back"><i class="fa-solid fa-arrow-left-long"></i></button>
                <button class="btn btn-outline-danger" @click="add(data)"><i
                        class="fa-solid fa-heart-circle-plus"></i></button>
            </div>

            <h2>Forma Normales</h2>
            <img :src="data.sprites.front_default" alt="front" />
            <img :src="data.sprites.back_default" alt="back" />

            <h2 class="mt-4">Forma Brillante</h2>
            <img :src="data.sprites.front_shiny" alt="front" />
            <img :src="data.sprites.back_shiny" alt="back" />
        </div>

        <div v-else>
            <h1>No existe ese pokemon</h1>
            <button class="btn btn-outline-success" @click="back">Volver</button>
        </div>
    </template>
</template>
