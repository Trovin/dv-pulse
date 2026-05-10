<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useAuth } from '../../composables/useAuth';

const router = useRouter();
const { login, loading, error } = useAuth();

const email = ref('');
const password = ref('');

async function onSubmit() {
  await login(email.value, password.value);
  await router.push('/');
}
</script>

<template>
  <div class="login-page">
    <h1>Login</h1>

    <form class="login-form" @submit.prevent="onSubmit">
      <div class="field">
        <label for="email">Email</label>
        <InputText
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="field">
        <label for="password">Password</label>
        <Password
          id="password"
          v-model="password"
          placeholder="Enter your password"
          :feedback="false"
          toggleMask
          required
        />
      </div>

      <small v-if="error" class="error">{{ error }}</small>

      <Button type="submit" label="Login" :loading="loading" />
    </form>
  </div>
</template>

<style scoped>
.login-page {
  max-width: 420px;
  margin: 80px auto;
  padding: 0 1rem;

  h1 {
    text-align: center;
  }
}

.login-form {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.field {
  display: grid;
  gap: 0.5rem;

  input {
    width: 100%;
  }
}

.error {
  color: var(--p-red-500);
}
</style>

