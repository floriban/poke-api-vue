<script setup>
import { useRoute, useRouter } from "vue-router";

import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { useGetData } from '@/composables/getData.js'

const { data, getData, loading } = useGetData()

const route = useRoute();
const router = useRouter();

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

            <button class="btn btn-outline-success" @click="back">Volver</button>

            <h2>Imagen</h2>
            <img :src="data.sprites.front_default" alt="front" />
            <img :src="data.sprites.back_default" alt="back" />
        </div>

        <div v-else>
            <h1>No existe ese pokemon</h1>
            <button class="btn btn-outline-success" @click="back">Volver</button>
        </div>
    </template>
</template>
