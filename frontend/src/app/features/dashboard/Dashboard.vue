<script setup lang="ts">
import { useDashboardStore } from './dashboard.store';

const dashboardStore = useDashboardStore();
</script>

<template>{{ dashboardStore.pageTitle }}</template>

<style scoped></style>
