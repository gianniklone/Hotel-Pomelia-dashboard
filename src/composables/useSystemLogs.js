import { ref, onMounted} from 'vue';
import axios from 'axios';


export function useSystemLogs() {
    const logs = ref([]);
    const error = ref(null);

    const fetchLogs = async () => {
        try {
            const response = await axios.get('/solar-panels.json');
            logs.value = response.data.logs || [];
        } catch (err) {
            error.value = err.message;
        }
    };

    onMounted(() => {
        fetchLogs();
        setInterval(fetchLogs, 5000);
    });

    return { logs, error, fetchLogs }
}