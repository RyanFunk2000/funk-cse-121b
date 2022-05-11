// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          setSections();
        };
      },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled--;
          setSections();
        };
      }
};

function setCourse() {
    document.querySelector("#courseCode").textContent = aCourse.code;
    document.querySelector("#courseName").textContent = aCourse.name;
}

function setSections() {
    section0 = `<tr>
    <td>${aCourse.sections[0].sectionNum}</td>
    <td>${aCourse.sections[0].sectionNum}</td>
    <td>${aCourse.sections[0].roomNum}</td>
    <td>${aCourse.sections[0].enrolled}</td>
    <td>${aCourse.sections[0].days}</td>
    <td>${aCourse.sections[0].instructor}</td></tr>`;

    section1 = `<tr>
    <td>${aCourse.sections[1].sectionNum}</td>
    <td>${aCourse.sections[1].sectionNum}</td>
    <td>${aCourse.sections[1].roomNum}</td>
    <td>${aCourse.sections[1].enrolled}</td>
    <td>${aCourse.sections[1].days}</td>
    <td>${aCourse.sections[1].instructor}</td></tr>`;
    
    document.querySelector("#sections").innerHTML = section0 + section1;
}

setCourse();
setSections();

document.querySelector('#enrollStudent')
    .addEventListener('click', function(e) {
        aCourse.enrollStudent(document.querySelector("#sectionNumber").value);
    });

document.querySelector('#dropStudent')
    .addEventListener('click', function(e) {
        aCourse.dropStudent(document.querySelector("#sectionNumber").value);
    });