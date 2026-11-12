/*
Student Name: Keshav Gangwar
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 6
Task Number: 1
*/

// Task 1: Convert a JavaScript object into JSON text using JSON.stringify
const student = {
    name: "Rohan",
    marks: [70, 80]
};

const jsonString = JSON.stringify(student);
console.log(jsonString);
