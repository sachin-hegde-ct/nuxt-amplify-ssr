<script setup lang="ts">
definePageMeta({
  middleware: "auth",
  title: "My Profile",
});

</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center h-100">
    <h1 class="mb-5">My Profile</h1>

    <div class="d-flex align-items-center justify-content-center">
        <NuxtLink to="/dashboard" class="btn btn-primary me-5">Go To Dashboard</NuxtLink>
        <button class="btn btn-primary" @click="useSignOut().signOut()">Logout</button>
    </div>
  </div>
</template>
