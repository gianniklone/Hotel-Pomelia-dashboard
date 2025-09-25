<script setup>
import { SunIcon } from '@heroicons/vue/24/solid';
import { useWeather } from '../composables/useWeather';

const { temperature, description,  error } = useWeather();
</script>

<template>
    <div class="bg-gradient-to-r from-[#3b82f6] to-[#9ab8e7] text-white rounded-lg shadow-xl p-4">
        <SunIcon class="h-8 w-8 hover:text-yellow-300 hover:scale-110 transition duration-300" />
        <div>
        <h2 class="text-xl font-semibold mb-2">Meteo Roma</h2>
        <p class="text-sm capitalize">{{ description }}</p>
        <p class="text-2xl font-bold mt-2">{{ temperature }} °C</p>
        <p v-if="error" class="text-red-500 text-sm mt-2">Errore: {{ error }}</p>
        </div>
    </div>
</template>