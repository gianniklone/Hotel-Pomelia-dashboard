import {ref, onMounted } from 'vue';
import axios from 'axios';


export function useSolarData() {
    const Kwh = ref(0);
    const error = ref(null);

    const fetchData = async() => {
        try {
            const response = await axios.get('/solar-panels.json');
            console.log(response.data);
            Kwh.value = response.data.Kwh;
        } catch (err) {
            console.error(err)
            error.value = err.message;
        }
    };

    onMounted(() => {
        fetchData();
        setInterval(fetchData, 5000)
    })

    return { Kwh, error, fetchData}
}