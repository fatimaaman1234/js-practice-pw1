let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];



//   Print each student in this format:
// Name: Amna
// Gender: Female
// City: Karachi
// Score: 56 marks

for (let i = 0; i < students.length; i++) {
    console.log("Name: " + students[i].name + "\nGender: " + students[i].gender + "\nCity: " + students[i].address.city + "\nScore: " + students[i].admissionTestScore)
}
console.log("");

// Print names of female students only.

for (let i = 0; i < students.length; i++) {
    if (students[i].gender == "f") {
        console.log(students[i].name);
    }
}
console.log("");

// Print names of male students only.

for (let i = 0; i < students.length; i++) {
    if (students[i].gender == "m") {
        console.log(students[i].name);
    }
}
console.log("");

// Print names of students who have passed the admission test. Passing marks are 50.

for (let i = 0; i < students.length; i++) {
    if (students[i].admissionTestScore >= 50) {
        console.log(students[i].name)
    }
}
console.log("");

// Print names of eligible students only (students who have internet and live in Karachi are eligible

for (let i = 0; i < students.length; i++) {
    if (students[i].hasInternet == true & students[i].address.city == "karachi") {
        console.log(students[i].name)
    }
}
console.log("");


// Print address of each student in this format:
// Amna's address:
// Gulistan-e-Johar in Karachi, Pakistan

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + "'s address \n" + students[i].address.ilaqa + "in " + students[i].address.city + ", " + students[i].address.country);
}
console.log("");


// Print names and phone number of students who have Ufone.


for (i = 0; i < students.length; i++) {
    if (students[i].phoneNo.charAt(2) == "3") {
        console.log(students[i].name)
    }
}
console.log("");

// Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
// Group A:  name1, name2
// Group B:  name3, name4, name5


for (i = 0; i < students.length; i++) {
    if (students[i].hasJob == true || students[i].hasSchoolBefore == true) {
        console.log("Group A:" + students[i].name)
    } else {
        console.log("Group B:" + students[i].name)
    }
}
console.log("");

// Print age of each student in the below format:
// Amna's age is 29 years

for (i = 0; i < students.length; i++) {
    let today = new Date();
    let birthDate = students[i].dob;
    let age = today.getFullYear() - birthDate.getFullYear();
    if (birthDate.getMonth() > today.getMonth()) {
        age--;
    } else if (birthDate.getMonth() == today.getMonth()) {
        if (birthDate.getDate() > today.getDate()) {
            age--;
        }
    }
    console.log(`${students[i].name}'s age is ${age} years`)
}

console.log("");

// Print the name of the oldest student


let oldestStudent = students[0];
for (i = 1; i < students.length; i++) {
    if (students[i].age > oldestStudent.age) {
        oldestStudent = students[i];
    }
    console.log(oldestStudent.name + " is the oldest student.");
}

console.log("");