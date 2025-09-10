<template>
  <div class="container py-4">

    <!-- Header / Search -->
    <header class="d-flex flex-column flex-md-row align-items-md-center gap-3 mb-4">
      <h1 class="h3 m-0">Shop</h1>
      <div class="ms-md-auto w-100" style="max-width: 480px;">
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-search"></i></span>
          <input type="search" class="form-control" placeholder="Search products...">
        </div>
      </div>
    </header>

    <!-- Category Filter Pills -->
   <div class="mb-3 d-flex flex-wrap gap-2">
      <button class="btn btn-sm btn-dark">All</button>
      <button class="btn btn-sm btn-outline-dark">Category 1</button>
      <button class="btn btn-sm btn-outline-dark">Category 2</button>
      <button class="btn btn-sm btn-outline-dark">Category 3</button>
    </div>

    <!-- Product Grid -->
    <div class="row g-3">
      
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100">
          <div class="ratio ratio-1x1">
            <img src="https://via.placeholder.com/300x300" class="card-img-top object-fit-cover" alt="Product 1">
          </div>
          <div class="card-body d-flex flex-column">
            <h2 class="h6 card-title mb-1">Product Title 1</h2>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge text-bg-light">Category 1</span>
              <strong class="fs-6">$29.99</strong>
            </div>
            <a href="#" class="btn btn-outline-primary btn-sm mt-auto">View</a>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100">
          <div class="ratio ratio-1x1">
            <img src="https://via.placeholder.com/300x300" class="card-img-top object-fit-cover" alt="Product 2">
          </div>
          <div class="card-body d-flex flex-column">
            <h2 class="h6 card-title mb-1">Product Title 2</h2>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge text-bg-light">Category 2</span>
              <strong class="fs-6">$49.99</strong>
            </div>
            <a href="#" class="btn btn-outline-primary btn-sm mt-auto">View</a>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100">
          <div class="ratio ratio-1x1">
            <img src="https://via.placeholder.com/300x300" class="card-img-top object-fit-cover" alt="Product 3">
          </div>
          <div class="card-body d-flex flex-column">
            <h2 class="h6 card-title mb-1">Product Title 3</h2>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge text-bg-light">Category 3</span>
              <strong class="fs-6">$19.99</strong>
            </div>
            <a href="#" class="btn btn-outline-primary btn-sm mt-auto">View</a>
          </div>
        </div>
      </div>

      <!-- duplicate product cards as needed -->

    </div>

    <!-- Pagination -->
    <nav class="d-flex justify-content-between align-items-center mt-4">
      <button class="btn btn-outline-secondary btn-sm" disabled>‹ Prev</button>
      <span class="small text-muted">Page 1 of 5</span>
      <button class="btn btn-outline-secondary btn-sm">Next ›</button>
    </nav>

  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth";
const { getuser } = useAuthStore();
const { user } = storeToRefs(useAuthStore());

onMounted( () => {
  getuser();
})


</script>