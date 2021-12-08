<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { storeToProvide: { type: Function, required: true } },
  setup(props) {
    props.storeToProvide();
    return {};
  },
});
</script>

<style scoped></style>
