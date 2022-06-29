function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function (grade) {
    this.grades.push(grade)
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((prev, curr) => prev + curr) / this.grades.length
}

// array to hold all the students
const studentList = [];


// student 1
const student1 = new Student("Bibek", "Thokar")
student1.inputNewGrade(20);
student1.inputNewGrade(30);
student1.inputNewGrade(40);
studentList.push(student1);

// student 2
const student2 = new Student("Sam", "Smith")
student2.inputNewGrade(30);
student2.inputNewGrade(40);
student2.inputNewGrade(50);
studentList.push(student2);

// student 3
const student3 = new Student("Taylor", "Swift")
student3.inputNewGrade(40);
student3.inputNewGrade(50);
student3.inputNewGrade(60);
studentList.push(student3);

// calculate average of grade for students
const average = studentList.reduce((prev, curr) => prev + curr.computeAverageGrade(), 0) / studentList.length;

console.log(average);

