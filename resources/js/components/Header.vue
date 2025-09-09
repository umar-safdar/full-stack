<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">MyShop</a>
      <form action="" @submit.prevent="logout('logout')">

        <button class="navbar-brand fw-bold" >logout</button>
      </form>

      <!-- Mobile toggle -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Products</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>

        <!-- Right side icons -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-person"></i> Account</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="bi bi-cart"></i> Cart</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>

import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth";


const router = useRouter();
const { error } = storeToRefs(useAuthStore());
const { logout, } = useAuthStore();

</script>