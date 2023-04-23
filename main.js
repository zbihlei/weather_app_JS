'use strict'

document.querySelector('.right_search').addEventListener('click', ()=>{
    const apiKey = 'a9ce7428cce4e0115f3170741d741f2e';
    const city = document.querySelector('.search').value;
    const container = document.querySelector('.container');
    const found = document.querySelector('.found');
    const notFound = document.querySelector('.not-found');
  
    if(city === '') return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data =>{
                
                if(data.cod ==='404'){
                    container.classList.add('container_in');
                    found.style.display = 'none';
                    notFound.style.display = 'block';
                }
                
                const weatherimg = document.querySelector('.weather_logo_img');
                const temperature = document.querySelector('.temp_num');
                const humidity = document.querySelector('.humidity_num');
                const wind = document.querySelector('.wind_num');

                switch(data.weather[0].main){
                    case 'Clear':
                        weatherimg.src = 'img/sunny.svg';
                        break;
                    case 'Clouds':
                        weatherimg.src = 'img/cloud.svg';
                        break;
                    case 'Rain':
                        weatherimg.src = 'img/rain.svg';
                        break;
                    case 'Snow':
                        weatherimg.src = 'img/snow.svg';
                        break;
                    case 'Haze':
                        weatherimg.src = 'img/haze.svg';
                        break;
                    default: weatherimg.src = '';
                }
             
                temperature.innerHTML = `${parseInt(data.main.temp - 273,15)}°C`;
                humidity.innerHTML = `${data.main.humidity}%`;
                wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;
               
                container.classList.add('container_in');
                notFound.style.display= '';
                found.style.display = 'block';

            })
            notFound.style.display= '';
});
