/*
Student Name: Keshav Gangwar
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 6
Task Number: 3
*/

// Task 3: Handle invalid JSON parsing using try-catch
const invalidJson = "{name: Rohan}";

try {
    const data = JSON.parse(invalidJson);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}
