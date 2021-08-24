import { asn1 } from 'node-forge';
import React, { useState, useEffect } from 'react'
import './content.css';
const apiKey = "69ef80137f3e9b566d79f6548f177afb";
const Content = () => {
    const [city, setCity] = useState("");
    const [temp, setTemp] = useState("");
    const [icon, setIcon] = useState("");
    const [condition, setCondition] = useState("");
    const getWeather = async(city, e) => {
        e.preventDefault();
        const url = `https://api.weatherapi.com/v1/current.json?key=0c924669d83e4b5581f52220213003&q=${city}&aqi=no`;
        fetch(url).then(data => data.json())
        .then((weather) => {
            if(weather.hasOwnProperty("current")){
                setTemp(weather.current.temp_c + "°C");
                setIcon(weather.current.condition.icon);
                setCondition(weather.current.condition.text);
            }else{
                setTemp("Not Found :(");
            }
        })


    }   
    return (
        <div className="content">
            <form>
            <label htmlFor="city-input">Cidade</label>
            <input className="city-input" type="text" value={city} onChange={(e) => {setCity(e.target.value)}}/>
            <button className="btn" onClick={(e) => {getWeather(city, e)}}>Search</button>
            </form>
            
            <section className="weather-display">
                <h2>{temp}</h2>
                <img src={icon} className="weather-ico" style={{borderRadius:'0.85rem'}}/>
                <h3>{condition}</h3>
            </section>
        </div>
    )
}

export default Content
