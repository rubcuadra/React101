import axios from 'axios';

const WEATHER_API_KEY = 'bab93b25fe18ec07df56382191c21d0f';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${URL}&q=${city},us`;
	const request = axios.get(url);
	
	return {
		type: FETCH_WEATHER,
		payload:request
	}
}

