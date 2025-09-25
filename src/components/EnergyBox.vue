<script setup>
import { onMounted } from 'vue';
import {useSolarData} from '../composables/useSolarData'
import {BoltIcon} from '@heroicons/vue/24/solid'


const { Kwh, error, fetchData } =  useSolarData();

onMounted(() => {
    fetchData();
    setInterval(fetchData,5000)
});

</script>

<template>
    <div class="bg-gradient-to-r from-[#22c55e] to-[#78b990] text-white rounded-lg shadow-xl p-4">
        <BoltIcon class="h-8 w-8 hover:text-green-200 hover:scale-110 transition duration-300" />
        <div>
        <h2 class="text-xl font-semibold mb-2">Efficienza Energetica</h2>
        <p class="text-sm">Produzione in tempo reale</p>
        <p class="text-2xl font-bold mt-2">{{ Kwh }} Kwh</p>
        <p v-if="error" class="text-red-500 text-sm mt-2">Errore: {{ error }}</p>
        </div>
    </div>
</template>