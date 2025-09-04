import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("AuthStore", () => {
    const name = ref("umar");
    const error = ref({});

    async function authenticate(apiRoute,formData) {
        try {
            console.log('formdata', formData.value);
            
            const { data } = await axios.post(`/api/${apiRoute}`, formData.value);
            localStorage.setItem("token", data.token);
             error.value = {};
            await router.push("/");

        } catch (err) {
            if (axios.isAxiosError(err)) {
                error.value = err.response?.data.errors || {};
            }

        }
    }

    return {  authenticate, error };
});
