import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore("AuthStore", () => {
    const name = ref("umar");
    const error = ref({});
    const router = useRouter();

    //  ********************** login,Register ********************** //
    async function authenticate(apiRoute,formData) {
        try {
            
            const { data } = await axios.post(`/api/${apiRoute}`, formData);
            localStorage.setItem("token", data.token);
            error.value = {};
            await router.push("/");

        } catch (err) {
            if (axios.isAxiosError(err)) {
                error.value = err.response?.data.errors ? err.response?.data.errors : { general: err.response?.data.message };
            }

        }
    }


    //  ********************** logout ********************** //
    async function logout(apiRoute) {
        try {
            const tokan = localStorage.getItem("token");
            
            const { data } = await axios.post(`/api/${apiRoute}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            localStorage.removeItem("token");
            error.value = {};
            await router.push("login");

        } catch (err) {
            if (axios.isAxiosError(err)) {
                error.value = err.response?.data.errors ? err.response?.data.errors : { general: err.response?.data.message };
            }

        }
    }

    return {  authenticate, logout, error };
});
