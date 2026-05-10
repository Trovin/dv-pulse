<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar';
import { useLayoutStore } from './layout.store';

const layoutStore = useLayoutStore();

const items = ref([
  {
    label: 'DASHBOARD',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'AI INTEGRATION',
    icon: 'pi pi-spin pi-cog',
    route: '/integration',
  },
  {
    label: 'DOCS',
    icon: 'pi pi-file',
    route: '/docs',
  },
]);
</script>

<template>
  <header>
    <Menubar :model="items">
      <template #item="{ item, props }">
        <router-link custom :to="item.route" v-slot="{ href, navigate }">
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon"></span>
            <span>{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>
  </header>

  <main class="dv-main">
    <RouterView />
  </main>
</template>

