<template>
  <provide-store :store-to-provide="provideMainStore">
    <router-view />
  </provide-store>
</template>

<script setup lang="ts">
import { provideMainStore } from "@/store";
import ProvideStore from "@/store/components/ProvideStore.vue";
</script>
