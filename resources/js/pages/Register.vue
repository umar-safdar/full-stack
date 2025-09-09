<template>
  <div class="min-vh-100 d-flex align-items-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4 p-md-5">
              <h1 class="h4 mb-4 text-center">Create Account</h1>
              <div v-if="error.general" class="alert alert-danger py-2 px-3 mt-3 small text-center text-black">
                {{ error.general }}
              </div>
              <form @submit.prevent="authenticate('signup', formData)">
                <div class="row">
                  <div class="col-12 col-12 mb-3">
                    <label class="form-label" for="firstName">First name</label>
                    <input v-model="formData.name" type="text" class="form-control" placeholder="Umar" />
                    <span class="text-danger small d-block mt-2" v-if="error.name">{{ error.name[0] }}</span>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="email">Email</label>
                  <input v-model="formData.email" type="email" class="form-control" placeholder="you@example.com" />
                  <span class="text-danger small d-block mt-2" v-if="error.email">{{ error.email[0] }}</span>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="password">Password</label>
                  <input v-model="formData.password" type="password" class="form-control" placeholder="••••••••" />
                  <span class="text-danger small d-block mt-2" v-if="error.password">{{ error.password[0] }}</span>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="confirmPassword">Confirm password</label>
                  <input v-model="formData.password_confirmation" type="password" class="form-control"
                    placeholder="••••••••" />
                    <span class="text-danger small d-block mt-2" v-if="error.password_confirmation">{{ error.password_confirmation[0] }}</span>
                </div>

                <div class="form-check mb-3">
                  <input id="terms" class="form-check-input" type="checkbox" />
                  <label class="form-check-label" for="terms">
                    I agree to the <a href="#" class="text-decoration-none">Terms & Conditions</a>
                  </label>
                </div>

                <button class="btn btn-primary w-100" type="submit">Create account</button>
              </form>

              <p class="text-center mt-4 mb-0 small">
                Already have an account?
                <RouterLink :to="{ name: 'login' }" class="text-decoration-none">login</RouterLink>
              </p>
            </div>
          </div>

          <p class="text-center text-muted small mt-3 mb-0">© 2025 Your App</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthStore } from "@/stores/auth";


const router = useRouter();
const { error } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();

const formData = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

</script>