<script setup>
import { useCounterStore } from '@/store/counter.js'
import { storeToRefs } from 'pinia'

const useCounter = useCounterStore()
const { increment } = useCounter
const { double, count } = storeToRefs(useCounter)

</script>

<template>
  <h1>Home counter: {{ count }}</h1>
  <h2>Double: {{ double }}</h2>
  <button @click="increment">Incrementar</button>
</template>
