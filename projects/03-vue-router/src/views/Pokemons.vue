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

        <div class="row">
            <div class="col-md-2 mb-4" v-for="(pokemon, index) in data.results" :key="index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ pokemon.name }}</h5>
                        <router-link class="btn btn-success text-center"
                            :to="`/pokemons/${pokemon.name}`">Detalles</router-link>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>
