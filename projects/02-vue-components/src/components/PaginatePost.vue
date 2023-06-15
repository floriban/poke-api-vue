<script setup>
defineProps({
    valorIni: Number,
    valorFin: Number,
    cantidadTotal: Number
})

const emits = defineEmits(['pagAnt', 'pagSig'])
</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary" @click="emits('pagAnt')"
            :disabled="valorIni <= 0 ? true : false">ANTERIOR</button>
        <button type=" button" class="btn btn-outline-primary" @click="emits('pagSig')"
            :disabled="valorFin >= cantidadTotal ? true : false">SIGUIENTE</button>
    </div>
</template>