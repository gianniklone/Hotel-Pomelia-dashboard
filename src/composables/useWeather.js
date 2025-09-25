import {ref, onMounted} from  'vue';
import axios from 'axios';



export function useWeather()  {
    const temperature = ref(null);
    const description = ref('');
    const error = ref(null);


    const fetchWeather = async () => {
        try {
            const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
            const city  = 'Rome,it';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            const response = await axios.get(url);

            temperature.value =  response.data.main.temp;
            description.value = response.data.weather[0].description;

        }  catch (err) {
            error.value = err.message;
        }
    };

    onMounted(() =>  {
        fetchWeather();
        setInterval(fetchWeather, 60000);
    });

    return { temperature, description, error };
}