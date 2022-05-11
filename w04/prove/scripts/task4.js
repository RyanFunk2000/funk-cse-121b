/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Ryan Funk";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "images/me.jpg";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Pasta","Alfredo","Lasagna","Pizza","Cheeseburger"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Video games","Choir","Internet","Programming"];

// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({place: "", length: ""});

// Step 8: For each property, add appropriate values as strings
myInfo.placesLived[0].place = "Mesa, AZ";
myInfo.placesLived[0].length = "15 years";

// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({place: "South Jordan, UT", length: "4 years"},
                        {place: "Gold Canyon, AZ", length: "1 year"},
                        {place: "Rexburg, ID", length: "1 year"});


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerText = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('src', myInfo.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('alt', myInfo.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favoriteFoods.forEach((x) => {
    let food = document.createElement('li');
    food.textContent = x;

    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.querySelector('#favorite-foods').appendChild(food);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.hobbies.forEach((x) => {
    let hobby = document.createElement('li');
    hobby.textContent = x;

    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(hobby);
});


// Step 8: For each object in the <em>placesLived</em> property:
myInfo.placesLived.forEach((x) => {
    // - Create an HTML <dt> element and put its place property in the <dt> element
    let placeLived = document.createElement('dt');
    placeLived.textContent = x.place;
    // - Create an HTML <dd> element and put its length property in the <dd> element
    let lengthLived = document.createElement('dd');
    lengthLived.textContent = x.length;

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placeLived);
    document.querySelector('#places-lived').appendChild(lengthLived);
});
