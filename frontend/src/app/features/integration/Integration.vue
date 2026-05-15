<script setup lang="ts">
import { useIntegrationStore } from './integration.store';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { ref, watch  } from 'vue';

const integrationStore = useIntegrationStore();

const userPrompt = ref('');
const claudeMessage = ref('');

let debounceTimer: ReturnType<typeof setTimeout> | null = null

watch(userPrompt, (newValue) => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(async () => {
    await setPrompt(newValue);
  }, 500)
})

const setPrompt = async (prompt: string) => {}
</script>

<template>
  <p>{{ integrationStore.pageTitle }}</p>

  <div class="integration-wrapper">
    <div class="integration-container">
      <Textarea v-model="userPrompt" class="integration-area" rows="5" cols="30" style="resize: none" />
      <Button class="integration-btn" @click="setPrompt"  label="Ask" />
    </div>

    <Textarea v-model="claudeMessage" class="integration-area" rows="5" cols="30" style="resize: none" />
  </div>
</template>

<style scoped>
.integration-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  gap: 20px;
}

.integration-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.integration-area,
.integration-btn {
  width: 100%;
  margin-top: 20px;
}

</style>

