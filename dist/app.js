"use strict";
const student1 = {
    name: "Shuvo",
    age: 25,
    isStudent: true,
    learn: ["Typescript", "Next JS", "Docker"],
    score: [70, 80, 65],
    info: ["Shuvo", 80, true],
};
const student2 = {
    name: "Shadman",
    age: 25,
    isStudent: true,
    learn: ["Javascript", "React", "Vue"],
    score: [70, 50, 85],
    info: ["Shadman", 70, true]
};
function showStudentInfo(student) {
    console.log(`Name: ${student1.name}`);
    console.log(`Age: ${student1.age}`);
    console.log(`Student: ${student1.isStudent}`);
    console.log(`Learn: ${student1.learn}`);
    console.log(`Score: ${student1.score}`);
    console.log(`Info: ${student1.info}`);
}
showStudentInfo(student1);
