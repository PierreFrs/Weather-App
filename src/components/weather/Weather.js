import React from 'react';
import './Weather.scss';

const Weather = () => {
  return (
    <section className='--100vh --center-all'>
        <div className="container weather --flex-center">
            <div className="weather-app --text-light">
                <h1>Weather App</h1>
                <p>2023-05-09</p>
                <div className="--form-control --my2">
                    <input type="text" placeholder='Search city name'/>
                </div>
                <div className="result --card --my2 --p">
                    <h2>Lille</h2>
                    <div className="icon">
                        <img src="" alt="" />
                    </div>
                    <p>Temp: 23</p>
                    <p>Weather: Clouds</p>
                    <p>Temp Range: 23/25</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Weather