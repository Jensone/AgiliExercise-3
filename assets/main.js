// On stock tous les <li> avec querySelectorAll ce qui créer un array (tableau)
const regions = document.querySelectorAll('.regions li')

// On stock les éléments pour modifier leur texte au clic
const h1 = document.querySelector("h1 span")
const citizen = document.querySelector(".citizen")

// On parcours le tableau pour exécuter le code en {} pour CHAQUE élément du tableau. On défini le nom de l'élément ("region" dans le tableau des régions)
regions.forEach(region => {
    region.addEventListener('click', function(){
        console.log(region.textContent)
        let regionFetch
        h1.innerHTML=region.textContent

        if(region.textContent === "Afrique") {
            citizen.innerHTML="Africain"
            regionFetch = "africa"
            countriesFetch(regionFetch)
        } else if (region.textContent === "Asie") {
            citizen.innerHTML="Asiatique"
            regionFetch = "asia"
            countriesFetch(regionFetch)
        } else if (region.textContent === "Amériques") {
            citizen.innerHTML="Américain"
            regionFetch = "americas"
            countriesFetch(regionFetch)
        } else if (region.textContent === "Océanie") {
            citizen.innerHTML="Océanien"
            regionFetch = "oceania"
            countriesFetch(regionFetch)
        } else {
            citizen.innerHTML="Européen"
            regionFetch = "europe"
            countriesFetch(regionFetch)
        }

        

    })
})



function countriesFetch(target) {
    // Récupération des pays de l'Europe depuis l'API REST Countries
    fetch('https://restcountries.com/v3.1/region/'+target)
    .then(response => response.json())
    .then(data => {
      const countries = document.querySelector('.countries')
      console.log(data)
    
      // Création d'une carte pour chaque pays
        data.forEach(country => {
        countries.innerHTML += `
                <li class="country_item">
                    <img src="${country.flags.svg}" alt="${country.flags.alt}">
                    <div class="country_info">
                        <h4 class="text-large">${country.name.common}</h4>
                        <h5>Capitale : ${country.capital}</h5>
                    </div>
                </li>`
        })
    })
    .catch(error => console.error(error))
}