<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  name: {
    type: String,
  },
  color: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "16px",
  },
  height: {
    type: String,
    default: "16px",
  },
})
</script>

<template>
  <svg style="width: 30px; height: 30px">
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>
