// object literal of student
let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, curr) => sum + curr, 0) / this.grades.length;
    }
}

// array to hold all the students
const studentList = [];

// student 1
const student1 = Object.create(student);
student1.grades = [];
student1.inputNewGrade(20);
student1.inputNewGrade(30);
student1.inputNewGrade(40);
student1.firstName = "bibek"
student1.lastName = "thokar"
studentList.push(student1);

// student 2
const student2 = Object.create(student);
student2.grades = [];
student2.inputNewGrade(30);
student2.inputNewGrade(40);
student2.inputNewGrade(50);
student2.firstName = "Sam"
student2.lastName = "Smith"
studentList.push(student2)

// student 3
const student3 = Object.create(student);
student3.grades = [];
student3.inputNewGrade(40);
student3.inputNewGrade(50);
student3.inputNewGrade(60);
student3.firstName = "Taylor"
student3.firstName = "Swift"
studentList.push(student3)

// calculate average of grade for students
const average = studentList.reduce((prev, curr) => prev + curr.computeAverageGrade(), 0) / studentList.length;

console.log(average);


