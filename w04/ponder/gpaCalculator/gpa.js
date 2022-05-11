// execute click handler function when grades are received from user
document.querySelector("#submitButton").addEventListener("click", clickHandler);

function clickHandler() {
    // get grades entered into input when html button is clicked
    const gradesArray = getGrades();

    // calculate and display gpa from grades
    const gpa = calculateGPA(gradesArray);
    outputGPA(gpa);
};

function getGrades() {
    // get grades from input
    let grades = document.querySelector("#grades").value;

    // split grades into array
    grades = grades.split(",");

    // return after mapping away white space and uppercasing
    return grades.map(x => x.toUpperCase().trim());
};

function calculateGPA(gradesArray) {
    // get list of grades and convert letters to GPA
    const pointsArray = lookupGrade(gradesArray);

    // calculate and return GPA
    return pointsArray.reduce((x, y) => x + y) / pointsArray.length;
};

function outputGPA(gpa) {
    // take GPA and display it in HTML
    document.querySelector('#output').innerText = `GPA: ${gpa}`;
};

function lookupGrade(grades) {
    // convert letter grades to points
    let points = grades.map(function (x) {
        if(x == "A"){
            return 4;
        }
        else if(x == "B"){
            return 3;
        }
        else if(x == "C"){
            return 2;
        }
        else if(x == "D"){
            return 1;
        }
        else if(x == "F"){
            return 0;
        }
        else {
            return null;
        };
    });

    // return array while filtering out elements not converted
    return points.filter(Number);
};