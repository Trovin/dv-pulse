<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import NxWelcome from './NxWelcome.vue';

const activeView = ref<'start' | null>(null);

const items = [
  {
    label: 'Start page',
    command: () => {
      activeView.value = 'start';
    },
  },
];
</script>

<template>
  <header>
    <Menubar :model="items" />
    <p v-if="activeView === null">Select a page from the menu</p>
  </header>

  <main>
    <NxWelcome v-if="activeView === 'start'" title="frontend" />
  </main>
</template>
