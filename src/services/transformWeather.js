import {
    CLOUDY,
    SUN,
    CLOUD,
    RAIN, 
    SNOW,
    WINDY,
} from './../constant/weathers';

const getWeatherState = (weather) =>{
    return SUN;

}

const transformWeather = (weather_data) =>{
    const weatherState =    getWeatherState(this.weather);
    const {humidity, temp } = weather_data.main;
    const {speed} = weather_data.wind;

    const data ={
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}
export default transformWeather;