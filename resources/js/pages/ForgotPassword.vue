<template>
  <div class="min-vh-100 d-flex align-items-center bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-5">
          <div class="card shadow-sm border-0">
            <div class="card-body p-4 p-md-5">
              <h1 class="h4 mb-4 text-center">Forgot Password</h1>

              <p class="text-muted small mb-4 text-center">
                Enter your email address and we’ll send you instructions to reset your password.
              </p>

              <form>
                <div class="mb-3">
                  <label class="form-label" for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="you@example.com"
                  />
                </div>

                <button class="btn btn-primary w-100" type="submit">
                  Send Reset Link
                </button>
              </form>

              <p class="text-center mt-4 mb-0 small">
                Remembered your password?
                <RouterLink :to="{name : 'login'}" class="text-decoration-none">Back to Login</RouterLink>
              </p>
            </div>
          </div>

          <p class="text-center text-muted small mt-3 mb-0">© 2025 Your App</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>