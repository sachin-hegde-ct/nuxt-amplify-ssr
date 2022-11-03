<script setup lang="ts">
definePageMeta({
  title: "Sign In",
});

const { $auth } = useNuxtApp();

const userName = ref("");
const password = ref("");
const isLoading = ref(true);

const signIn = async () => {
  try {
    await $auth.signIn(userName.value, password.value);
    navigateTo("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(async () => {
  isLoading.value = true;

  try {
      const isLoggedIn = await useAuth().isUserLoggedIn();
    
      if (isLoggedIn) {
          setTimeout(() => {
            isLoading.value = false;
            navigateTo("/dashboard");
          }, 5000);
      } else {
        isLoading.value = false;
      }
  } catch(error) {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="d-flex align-items-center justify-content-center h-100">
    <div v-if="isLoading" class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="card w-50">
      <div class="card-body">
        <h5 class="card-title">Sign In</h5>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            v-model="userName"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            id="exampleFormControlInput1"
          />
        </div>
        <button class="btn btn-primary" @click="signIn">Sign In</button>
      </div>
    </div>
  </div>
</template>
