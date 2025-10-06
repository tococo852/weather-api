
const weather =({resolvedAddress, description, currentConditions,
        days})=>{
    let weatherValues={resolvedAddress, description, currentConditions,days}

    let newDays = []
    days.map(({conditions,datetime,description,tempmin,tempmax,}) =>{
        let newDay={conditions, datetime, description}
        newDays.push(newDay)
    })

    weatherValues.days=newDays

    return weatherValues


}

export {weather}