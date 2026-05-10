// Teacher records stored in an array
const teachers = [
    { id: 1, name: "Amit", salary: 18000 },
    { id: 2, name: "Priya", salary: 25000 },
    { id: 3, name: "Rahul", salary: 30000 },
    { id: 4, name: "Sneha", salary: 15000 },
    { id: 5, name: "Kiran", salary: 22000 }
];

// Find teachers whose salary is greater than 20,000
const highSalaryTeachers = teachers.filter(teacher => teacher.salary > 20000);

// Display result
console.log("Teachers with salary greater than 20,000:");
console.table(highSalaryTeachers);