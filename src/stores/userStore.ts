import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const name = ref<string>('asya');
    const city = ref<string>('Санкт-Петербург');

    return {
        name,
        city,
    };
});