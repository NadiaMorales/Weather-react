import React from 'react';
import WeatherLocation from './WeatherLocation';


const LocationList = ()  => (
    <div>
        <WeatherLocation city={'Santiago,scl'} />
        <WeatherLocation city={'Bogota,col'} />
        <WeatherLocation city={'Buenos Aires,ar'} />
        <WeatherLocation city={'Rio de janeiro,br'} />
    </div>
);

export default LocationList;