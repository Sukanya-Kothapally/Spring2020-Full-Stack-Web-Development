// const url = 'https://restcountries.eu/rest/v2/all';  

fetch('https://restcountries.eu/rest/v2/all')
.then(results => results.json())
.then(countries => 
    {
     let output = '<h3>Lists of Countries</h3>';
     output += '<ol style="padding:10px">';
     countries.forEach(function(country) {  
     var populationinnumber= country.population.toString();
     var populationformat= populationinnumber.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
     output += `<li>${country.name} : ${populationformat}</li>`;     
    }); 
    output += '</ol>'
    document.getElementById("results").innerHTML = output;
    });
