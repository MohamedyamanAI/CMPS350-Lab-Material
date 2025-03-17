// declare the base URL
const regionBaseUrl = 'https://restcountries.com/v3.1/region/';
const countryBaseUrl = 'https://restcountries.com/v3.1/name/';


regionDD = document.querySelector("#region");
countryDD = document.querySelector("#country");
factsAreaDiv = document.querySelector("#facts-area");


regionDD.addEventListener("change", handleChoosenRegoin);
countryDD.addEventListener("change", handleChoosenCountry);

async function handleChoosenRegoin(e) {
    regionUrl = `${regionBaseUrl}${regionDD.value}`;
    const response = await fetch(regionUrl);
    const countries = await response.json();
    console.log(countries);
    countriesOptions = countries.map(country => `<option id="${country.name.common}">${country.name.common}</option>`).join("");
    countryDD.innerHTML = countriesOptions;
}

async function handleChoosenCountry(e) {
    countryUrl = `${countryBaseUrl}${countryDD.value}`;
    reponse = await fetch(countryUrl);
    country = await reponse.json();
    factsAreaDiv.innerHTML = makeProfile(country);
}

function makeProfile(country) {
    console.log(country);
    `<p>${country[0].capital[0]}</p>`
}