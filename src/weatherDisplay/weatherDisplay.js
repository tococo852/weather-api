import { getWeather } from "../dataHandler/dataHandler";



const displayCurrent = (weather) => {
  const weatherBox = document.querySelector(".weatherBox");
  const currentDiv = weatherBox.querySelector(".weatherCurrent");
  currentDiv.innerHTML = ""; // clear old content if any

  const { resolvedAddress, description, currentConditions } = weather;
  const { temp, conditions } = currentConditions;

  const locationEl = document.createElement("h2");
  locationEl.textContent = resolvedAddress;

  const descEl = document.createElement("p");
  descEl.textContent = description;

  const conditionEl = document.createElement("p");
  conditionEl.textContent = `Condition: ${conditions}`;

  const tempEl = document.createElement("p");
  tempEl.textContent = `Temperature: ${temp}°C`;

  currentDiv.append(locationEl, descEl, conditionEl, tempEl);
};


const displayDays = (weather) => {
  const weatherBox = document.querySelector(".weatherBox");
  const tableDiv = weatherBox.querySelector(".weatherTable");
  tableDiv.innerHTML = ""; // clear old table if any

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  ["Date", "Condition", "Description"].forEach((title) => {
    const th = document.createElement("th");
    th.textContent = title;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  weather.days.forEach((day) => {
    const { datetime, conditions, description } = day;

    const row = document.createElement("tr");

    const dateTd = document.createElement("td");
    dateTd.textContent = datetime;

    const condTd = document.createElement("td");
    condTd.textContent = conditions;

    const descTd = document.createElement("td");
    descTd.textContent = description;

    row.append(dateTd, condTd, descTd);
    table.appendChild(row);
  });

  tableDiv.appendChild(table);
};


async function weatherDisplay(input) {

    let weather= await getWeather(input)
    displayCurrent(weather)
    displayDays(weather)
    
}

export {weatherDisplay}
