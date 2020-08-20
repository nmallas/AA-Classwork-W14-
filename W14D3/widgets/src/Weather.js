import React from "react"

class Weather extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            weather: null
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(success => {
            let {latitude, longitude} = success.coords
            console.log(latitude, longitude);
            this.pollWeather(latitude, longitude)
        })
    }

    pollWeather = async (latitude,longitude) => {
        // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
        const str = `api.openweathermap.org/data/2.5/weather?lat=${Math.floor(latitude)}&lon=${Math.floor(longitude)}&appid=088de575be03e2ce6114f97fcb5fa09a`;
        console.log(str);
        let res = await fetch(str);
        console.log(res);
        let data = await res.json();
        console.log(data);
    }

    render() {
        return (
            <h1>Weather</h1>
        )
    }
}

export default Weather;
