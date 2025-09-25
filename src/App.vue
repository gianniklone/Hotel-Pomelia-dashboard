<template>
  <div class="min-h-screen bg-gray-700 p-6">
    <h1 class="text-3xl text-white font-bold mb-6 text-center">Hotel Pamelia</h1>

    <!-- Dashboard Grid-->
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <EnergyBox />
      <LogsBox />
      <WeatherBox />
     </div>
  </div>
</template>

<script setup>
import EnergyBox from './components/EnergyBox.vue'
import LogsBox from './components/LogsBox.vue'
import WeatherBox from './components/WeatherBox.vue'
</script>

