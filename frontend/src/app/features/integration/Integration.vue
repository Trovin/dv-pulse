<script setup lang="ts">
import { useIntegrationStore } from './integration.store';

const integrationStore = useIntegrationStore();
</script>

<template>{{ integrationStore.pageTitle }}</template>

<style scoped></style>

