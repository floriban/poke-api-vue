<script setup>

defineProps({
    id: Number,
    title: String,
    colorText: {
        typ: String,
        default: 'secondary'
    },
    description: {
        type: String,
        default: '-'
    }
})

const emits = defineEmits(['cambiarFavoritoNombre'])

</script>

<template>
    <div class="card mb-2">
        <div class="card-body">
            <h5 class="card-title">{{ id }} - {{ title }}</h5>
            <p :class="`text-${colorText}`">{{ description }}</p>
            <button class="btn btn-outline-primary" @click="emits('cambiarFavoritoNombre', title)">Agregar Favorito</button>
        </div>
    </div>
</template>