/*
Student Name: Keshav Gangwar
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 9
Task Number: 1
*/

// DOM manipulation: change heading text on button click
const heading = document.getElementById("mainHeading");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
    heading.textContent = "Button clicked";
});
