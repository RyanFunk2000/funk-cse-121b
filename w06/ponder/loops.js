// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: 
    [
        {
        place: "Rexburg, ID",
        length: "5 years",
        },
        {
        place: "Ammon, ID",
        length: "3 years",
        },
        {
        place: "Sandy, UT",
        length: "1 year",
        },
    ],
};

const foodHTML = document.querySelector("#favorite-foods")
const placesHTML = document.querySelector("#places-lived");

function addFood(food) {
    return `<li>${food}</li>`;
}

function addPlace(place) {
    return `<dt>${place.place}</dt>
            <dd>${place.length}</dd>`;
}

function addList(list, template) {
    const htmlList = list.map(template);
    return htmlList.join("");
}

foodHTML.innerHTML = addList(myInfo.favoriteFoods, addFood);
placesHTML.innerHTML = addList(myInfo.placesLived, addPlace);