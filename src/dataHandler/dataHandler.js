import { apiKey } from "../../apikey/key";
import { weather } from "../weatherObject/weatherObject.js";
let querry='san%20felipe%2C%20chile'
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



const jsonProcessing= async()=>{

    let weatherJson = await weatherData(querry)
    weather(weatherJson)
    
}

jsonProcessing()

