const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country)
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');


        countryDiv.innerHTML = `
            <h3>Name:${country.name.common} </h3>
          <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
          <button onclick="loadCountryDetail('${country.cca2}')" > Details </button>
        `
        countriesContainer.appendChild(countryDiv);

    });
}

const loadCountryDetail = (code) => {
    // console.log('get country details', code)
    const url = (`https://restcountries.com/v3.1/alpha/${code}`)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}

const displayCountry = country => {
    console.log(country)
    window.scrollTo(0, 20);


    const countryDetail = document.getElementById('country-details');

    countryDetail.innerHTML = `
        <h3>Details: ${country.name.common} </h3>
        <h3>Region: ${country.region} </h3>
       
        <img src="${country.flags.png}" alt="">
    `
}

loadCountries();