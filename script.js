// API_KEY for open weather map api
// Kindly use your own api key
const API_key = 'your-open-weather-map-api_key'

const getWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_key}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const cityName = document.getElementById('city-name')
    const weatherType = document.getElementById('weather-type')
    const temp = document.getElementById('temp')
    const minTemp = document.getElementById('min-temp')
    const maxTemp = document.getElementById('max-temp')
    try {
        const data = await getWeatherData(city)
        showWeatherData(data)
    } catch(error) {
        console.log(error)
        console.log('An error occurred')
        cityName.innerText = 'No such city found'
        weatherType.innerText = '---'
        temp.innerText = '--°'
        minTemp.innerText = '--°'
        maxTemp.innerText = '--°'
    }
}

const showWeatherData = (weatherData) => {
  const cityName = document.getElementById('city-name')
  cityName.innerText = weatherData.name
  const weatherType = document.getElementById('weather-type')
  weatherType.innerText = weatherData.weather[0].main
  const temp = document.getElementById('temp')
  temp.innerText = weatherData.main.temp
  const minTemp = document.getElementById('min-temp')
  minTemp.innerText = weatherData.main.temp_min
  const maxTemp = document.getElementById('max-temp')
  maxTemp.innerText = weatherData.main.temp_max
}
