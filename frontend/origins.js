const body = document.body

const div = document.createElement("div")
div.className = "countryCards"

function createCountries(countries){
    countries.forEach(country =>{
        let divCard = document.createElement("div")
            divCard.className = "eachCountryCard"

        let flag = document.createElement("IMG")
            flag.className = "flag"

        let name = document.createElement("h2")
            name.className = "countryName"

        let region = document.createElement("p")
            region.className = "regionName"
            
        let subRegion = document.createElement("p")
            subRegion.className = "subregionName"
      

        name.innerText = country.name
        region.innerText = `Region: ${country.region}`
        subRegion.innerText = `Subregion: ${country.subregion}`
        flag.src = country.flag

        divCard.append(flag, name, region, subRegion)
        div.append(divCard)
    })
    
    body.append(div)
}

fetch("http://localhost:3000/origins")
    .then(response => response.json())
    .then(createCountries)
