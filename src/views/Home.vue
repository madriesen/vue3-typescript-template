<template>
  <div class="bg-red-500">{{ message }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store";
const { message } = useMainStore();
</script>
