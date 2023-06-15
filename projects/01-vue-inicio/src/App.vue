<script setup>
import { computed, ref } from 'vue';

const name = "Vue dinamico"
const count = ref(0)

const arrayFrutas = ["🍈", "🍉", "🍊", "🍋", "🍌"]
const nuevoArray = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
  }, {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
  }, {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
  }
]

const arrayNumeros = ref([])

// METODO
const handleClick = (mensaje) => {
  console.log(mensaje)
}

const clickPulsado = (mensje) => {
  console.log(mensje)
}

const incrementar = () => count.value++
const decrementar = () => count.value--
const reset = () => (count.value = 0)
const agregar = () => arrayNumeros.value.push(count.value)

const bloquearBtnAdd = computed(() => {
  return arrayNumeros.value.includes(count.value) ? true : false
})

const classCounter = computed(() => {
  if (count.value === 0) {
    return 'zero'
  }

  if (count.value > 0) {
    return 'positive'
  }

  if (count.value < 0) {
    return 'negative'
  }
})
</script>

<template>
  <div class="container">
    <h1>HOLA {{ name.toUpperCase() }}</h1>
    <ul>
      <li v-for="fruta in nuevoArray" :key="fruta.name">
        <span>Fruta: {{ fruta.name }}</span>
        <span>Precio: {{ fruta.price }}</span>
        <span>Descripcion: {{ fruta.description }}</span>
      </li>
    </ul>

    <button @click="handleClick('JAJA')">Activame</button>
    <button @click="handleClick('GRACIAS POR HACER CLICK')">Activame</button>

    <br>

    <button @click.left="clickPulsado('PULSASTE EL IZQUIERDO')">CLICK IZQ</button>
    <button @click.middle="clickPulsado('PULSASTE EL CENTRO')">CLICK CEN</button>
    <button @click.right.prevent="clickPulsado('PULSASTE EL DERECHO')">CLICK DER</button>

    <br>

    <h1 :class="classCounter">{{ count }}</h1>
    <div class="btn-group">
      <button @click="incrementar" class="btn btn-primary">Aumentar</button>
      <button @click="decrementar" class="btn btn-primary">Disminuir</button>
      <button @click="reset" class="btn btn-danger">Reiniciar</button>
      <button @click="agregar" :disabled="bloquearBtnAdd" class="btn btn-success">Agregar</button>
    </div>

    <br>

    {{ arrayNumeros }}

    <ul class="list-group">
      <li v-for="(num, index) in arrayNumeros" :key="index" class="list-group-item">{{ num }}</li>
    </ul>
  </div>
</template>

<style>
.positive {
  color: green
}

.negative {
  color: red
}

.zero {
  color: blue
}
</style>