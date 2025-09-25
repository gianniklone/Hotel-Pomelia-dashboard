<script setup>
    import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid';
    import { useSystemLogs} from '../composables/useSystemLogs';

    const { logs, error} = useSystemLogs();
</script>

<template>
    <div class="bg-gradient-to-r from-[#6b7280] to-[#a8b0c0] text-white rounded-lg shadow-xl p-4">
        <ClipboardDocumentCheckIcon class="h-8 w-8 hover:text-gray-300 hover:scale-110 transition duration-300 " />
        <div>
        <h2 class="text-xl font-semibold mb-2">System Logs</h2>
        <ul>
            <li v-for="(log, index) in logs" :key="index" class="mb-1">
                {{ log }}
            </li>
        </ul>

        <p v-if="error" class="text-red-500 mt-2">Errore: {{ error }}</p>
        </div>
    </div>
</template>