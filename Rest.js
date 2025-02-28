//function introductive de l'API
const loadCountryAPi = () => {
    //Url Rest API
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data.slice(220, 240)))
}

//Rangement des pays
const displayCountries = countries => {
    //console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country))
    // Recadrer les div dans html
    const container = document.getElementById(`countries`);
    container.innerHTML = countriesHTML.join(` `);
}

// Insersion des données en HTML
const getCountry = (country) => {
    console.log(country)
    return `
    <div class="country-div">
      <img src="${country.flags.png}"> 
    <h2>${country.name.common}</h2>
    <h4>Capitale: ${country.capital}</h4>
    <h4>Devise: ${country.currencies.name}</h4>
    
  
    </div>
     ` 
    console.log(Devise)

}

 
//Apelle de la fonction dans la console

loadCountryAPi()