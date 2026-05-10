<script setup lang="ts">
import { useDocsStore } from './docs.store';

const docsStore = useDocsStore();
</script>

<template>{{ docsStore.pageTitle }}</template>

<style scoped></style>

