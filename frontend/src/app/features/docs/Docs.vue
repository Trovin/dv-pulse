<script setup lang="ts">
import { useDocsStore } from './docs.store';

const docsStore = useDocsStore();
</script>

<template>{{ docsStore.pageTitle }}</template>

<style scoped>
.docs {
  color: red;
  font-size: 16px;
  margin: auto auto auto;
  display: flex;
  background: #fff;
  padding: 10px 20px;
}
</style>

