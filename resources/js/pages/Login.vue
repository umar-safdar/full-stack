<template>
  <div class="min-vh-100 d-flex align-items-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-5">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4 p-md-5">
              <h1 class="h4 mb-4 text-center">Login</h1>

              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label class="form-label" for="email">Email</label>
                  <input v-model="formData.email" type="email" class="form-control" placeholder="you@example.com" />
                  <span v-if="error?.email" class="text-red-500 text-sm mt-1 block">
  {{ error.email[0] }}
</span>
                </div>

                <div class="mb-3">
                  <label class="form-label" for="password">Password</label>
                  <input v-model="formData.password" type="password" class="form-control" autocomplete
                    placeholder="••••••••" />
                  <span v-if="error?.password" class="text-red-500 text-sm mt-1 block">{{ error.password[0] }}</span>
                </div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div class="form-check">
                    <input id="remember" class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="remember">Remember me</label>
                  </div>
                <RouterLink :to="{name : 'forgot-password'}" class="text-decoration-none">Forgot password?</RouterLink>
                </div>

                <button class="btn btn-primary w-100" type="submit">
                  Login
                </button>
              </form>

              <p class="text-center mt-4 mb-0 small">
                Don’t have an account?
                <RouterLink :to="{name : 'signup'}" class="text-decoration-none">Register</RouterLink>
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

const loading = ref(false)
const router = useRouter();

const formData = ref({
  email: '',
  password: '',
})
// const errs = reactive({
//   email: null,
//   password: null,
//   global: null,
// })

const data = ref([null]);
const error = ref({});

// const submitForm = async () => {
//   loading.value = true
//   errs.email = errs.password = errs.global = null

//   try {
//     const { data } = await axios.post('/api/login', formData.value)
//     localStorage.setItem('token', data.token)
//     await router.push('/')
//   } catch (err) {
//     if (axios.isAxiosError(err)) {
//       const payload = err.response?.data || {}
//       console.log(payload);
//       console.log('general log',err);
//       // errs.email = payload.message.email || null
//       // errs.password = payload.message.password || null
//       // errs.global = payload.message || null

//       // Laravel-style validation errors
//       const v = payload.errors || {}
//       errs.email = Array.isArray(v.email) ? v.email[0] : v.email ?? null
//       errs.password = Array.isArray(v.password) ? v.password[0] : v.password ?? null

//     } else {
//       // errs.global = 'Unexpected error. Please try again.'
//     }

//     console.log(errs)
//   } finally {
//     loading.value = false
//   }
// }

const submitForm = () => {
  axios.post('/api/login', formData.value)
    .then(res => {
      data.value = res.data;
      console.log(data);
      localStorage.setItem('token', res.data.token)
      router.push('/')
    })
    .catch(err => {
      error.value = err.response.data.errors;
      console.log(err.response.data.errors);      
    })
}
</script>