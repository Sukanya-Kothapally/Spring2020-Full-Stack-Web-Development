// const url = 'https://pokeapi.co/api/v2/pokemon/';

let url='https://pokeapi.co/api/v2/pokemon/'


fetch(url)
.then(results => results.json())
.then(pokemons => 
    {
     var output = '';
     output += '<div style="padding:10px">';
     pokemons.results.forEach(function(pokemon) { 
     output += '<span style="text-transform:capitalize">';
     output += `<li>${pokemon.name}</li>`;     
    }); 
    output += '</span>'
    output += '</div>'
    document.getElementById("results").innerHTML = output;
    });
