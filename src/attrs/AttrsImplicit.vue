<script setup lang="ts">
/** vue por defecto pasa los atributos (html) al primer o unico elemento
esto es equivalente a ...res de react */
defineProps<{ label: string }>();
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>

<style scoped></style>
