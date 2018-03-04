import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import {
		CLOUDY,
		SUN,
		CLOUD,
		RAIN, 
		SNOW,
		WINDY,
} from './../../constant/weathers';

const data2 = {
	temperature:20,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
}
const data1 = {
	temperature:30,
	weatherState: WINDY,
	humidity: 80,
	wind: 200,
}
const api_key = 'd774d64804eb79c44d898461c60fde63';
const location = 'santiago,scl';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`


class WeatherLocation extends Component{
	constructor (){
		super();
		this.state = { 
			city: 'Santiago',
			data: data2,
		}

	}
	getWeatherState = (weather) =>{
		return SUN;

	}

	getData = (weather_data) =>{
		const weatherState = this.getWeatherState(this.weather)
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
	handleUpdateClick = () => {
		fetch(api_weather).then( data =>{
			console.log(data)
			return data.json();
		}).then(weather_data =>{
			const data = this.getData(weather_data)
			this.setState ({ data })
			
			 
		})
	
	}
	render = () => {
		const {city, data} = this.state;
    return (
     <div className='weatherDataCont'>
		<Location city = {city}/>
       <WeatherData data = {data} />
       <button className='btn' onClick = {this.handleUpdateClick}>Actualizar</button>
	</div>
    );
  }

}

export default WeatherLocation;