// Récupération des pays de l'Europe depuis l'API REST Countries
fetch('https://restcountries.com/v3.1/region/europe')
.then(response => response.json())
.then(data => {
  const countries = document.querySelector('.countries')
  console.log(data);

  // Création d'une carte pour chaque pays
    data.forEach(country => {

    countries.innerHTML += `
            <li class="country_item">
                <img src="${country.flags.svg}" alt="Drapeau du pays : ${country.name.common}">
                <div class="country_info">
                    <h4 class="text-large">${country.name.common}</h4>
                    <h5>Capitale : ${country.capital}</h5>
                </div>
            </li>
    `
    
    })
})
.catch(error => console.error(error));
