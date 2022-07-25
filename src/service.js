
export const getWeatherByCity = async (city) => {
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(weatherApiKey)
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
        const data = await response.json();
        return data;
      } catch {
        throw new Error('Error fetching weather');
      } 
}