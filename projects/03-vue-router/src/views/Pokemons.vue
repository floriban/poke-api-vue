<script setup>
import { RouterLink } from "vue-router";

import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { useGetData } from '@/composables/getData.js'

const { data, getData, loading } = useGetData()

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
    <LoadingSpinner v-if="loading" />

    <template v-else>
        <h1>Pokemons</h1>

        <div class="btn-group mb-3">
            <button class="btn btn-success" @click="getData(data.previous)" :disabled="!data.previous"><i
                    class="fa-solid fa-arrow-left"></i></button>
            <button class="btn btn-success" @click="getData(data.next)" :disabled="!data.next"><i
                    class="fa-solid fa-arrow-right"></i></button>
        </div>

        <ul class="list-group">
            <li class="list-group-item" v-for="(pokemon, index) in data.results" :key="index">
                <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
            </li>
        </ul>
    </template>
</template>
