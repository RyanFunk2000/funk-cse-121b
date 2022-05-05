// map for html
const array = ["one", "two", "three"];
const mapped_array = array.map(function (x) {
  return `<li>${x}</li>`;
});
console.log(mapped_array);
document.querySelector("#myList").innerHTML = mapped_array.join("");

// map by condition
const grades = ["A", "B", "A"];
const points = grades.map(function (x) {
    if(x == "A"){
        return 4;
    }
    else if(x == "B"){
        return 3;
    };
});
console.log(points);

// reduce array into grade point average
const gpa = points.reduce((x, y) => x + y) / points.length;
console.log(gpa);

// filter strings longer than 6 characters
const fruit = ["watermelon", "peach", "apple", "tomato", "grape"];
const fruit_filter = fruit.filter(x => x.length > 6);
console.log(fruit_filter);

// indexOf (return first index value where element meets condition)
const numbers = [12, 34, 21, 54];
console.log(numbers.indexOf(21));