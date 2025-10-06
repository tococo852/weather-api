import { apiKey } from "../../apikey/key";
import { weather } from "../weatherObject/weatherObject.js";
let key =apiKey()

async function weatherData(querry){
    let url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${querry}?unitGroup=metric&key=${key}`
    try{
        let weatherResponse= await fetch(url)
        let weatherJson= weatherResponse.json()
        return weatherJson

    } catch(error){
        console.log(error)
    }
    
}



const getWeather= async(querry)=>{

    let weatherJson = await weatherData(querry)
    console.log(weatherJson)
    return weather(weatherJson)
    
}

export {getWeather}


