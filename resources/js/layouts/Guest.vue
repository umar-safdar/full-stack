<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script setup>
import  Header  from "../components/Header.vue";
import  Footer  from "../components/Footer.vue";
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

</script>