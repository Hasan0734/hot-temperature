const apiBase = 'http://api.openweathermap.org/data/2.5/weather?'
const apiKey = '3f40b2c04fb47d35aea1728b7b3be1ca';

document.getElementById('search').addEventListener('click', () => {
    const cityName = document.getElementById('input-state').value;
    getWeatherData(cityName);
})

const updateUI = data => {
    const { name, weather, main } = data
    document.getElementById('state-name').innerText = name || "Unknown Location!";
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    document.getElementById('temperature').innerText = main.temp;
    document.getElementById('describe').innerText = weather[0].main;
    document.getElementById('input-state').value = '';
}

const getWeatherData = async city => {
    const res = await fetch(`${apiBase}q=${city}&appid=${apiKey}`);
    const data = await res.json();
    updateUI(data);
}
getWeatherData('Dhaka');
