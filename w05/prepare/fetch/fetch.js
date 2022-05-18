// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doStuff(data);
    }
}

function doStuff(data) {
    const output = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
        <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    output.innerHTML = html
    console.log("first: ", results);
    }

function doStuffList(dataList) {
    const outputList = document.querySelector("#outputList");
    pokeList = dataList.results;
    const htmlList = pokeList.map((pokeList) => `<li>${pokeList.name}</li>`);
    outputList.innerHTML = htmlList.join("");
}

async function getPokemonList(urlList) {
    const response = await fetch(urlList);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const dataList = await response.json();
        doStuffList(dataList);
    }
}

getPokemon(url);
getPokemonList(urlList);
console.log("second: ", results);