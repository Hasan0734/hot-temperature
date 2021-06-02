const key = '3f40b2c04fb47d35aea1728b7b3be1ca'
const apiLink = 'http://api.openweathermap.org/data/2.5/weather?'
const  getWeatherData = city => {
    const url = `${apiLink}q=${city}&appid=${key}`
    fetch(url)
        .then(res => res.json())
        .then(data =>  updateUI(data) )

}

document.getElementById('search').addEventListener('click', () => {
    const cityName = document.getElementById('input-state').value;
    getWeatherData(cityName);

})
const updateUI = data => {
    const { name, weather, main } = data
    document.getElementById('state-name').innerText = name;
    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    document.getElementById('temperature').innerText = main.temp;
    document.getElementById('describe').innerText = weather[0].main;
}
getWeatherData('Dhaka')