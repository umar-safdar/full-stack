<template>
  <div class="min-vh-100 d-flex align-items-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-5">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4 p-md-5">
              <h1 class="h4 mb-4 text-center">Login</h1>

              <form @submit.prevent="authenticate('login',formData)">
                <div class="mb-3">
                  <label class="form-label" for="email">Email</label>
                  <input v-model="formData.email" type="email" class="form-control" placeholder="you@example.com" />
                  <span v-if="error.email">{{ error.email[0] }}</span>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="password">Password</label>
                  <input v-model="formData.password" type="password" class="form-control" autocomplete
                    placeholder="••••••••" />
                  <span v-if="error.password">{{ error.password[0] }}</span>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="form-check">
                    <input id="remember" class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="remember">Remember me</label>
                  </div>
                  <a href="#" class="small text-decoration-none">Forgot password?</a>
                </div>

                <button class="btn btn-primary w-100" type="submit">
                  Login
                </button>
              </form>

              <p class="text-center mt-4 mb-0 small">
                Don’t have an account?
                <a href="#" class="text-decoration-none">Register</a>
              </p>
            </div>
          </div>

          <p class="text-center text-muted small mt-3 mb-0">
            © 2025 Your App
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref ,reactive} from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth";


const router = useRouter();
const { error } = storeToRefs( useAuthStore() );
const { authenticate } = useAuthStore();


const formData = ref({
  email: '',
  password: '',
})

// console.log('umar',formData.value);


</script>