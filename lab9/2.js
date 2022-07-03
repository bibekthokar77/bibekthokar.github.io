class Student {
    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }

    addAnswer(question) {
        this.answers.push(question)
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer) {
        return this.answer === answer;
    }
}

class Quiz {

    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(q => this.questions.set(q.qId, q.answer));
        this.students = students;
    }

    scoreStudent(sid) {
        let student = this.students.find(s => s.studentId === sid);
        return student.answers.reduce((s, currQuestion) => {
            if (currQuestion.checkAnswer(this.questions.get(currQuestion.qId))) {
                s = s + 1;
            }
            return s;
        }, 0)
    }

    getAverageScore() {
        return this.students.reduce((avg, currStudent, index, array) => avg + this.scoreStudent(currStudent.studentId) / array.length, 0);
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions = [new Question(1, 'b'), new Question(2, 'a'), new
    Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudent(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudent(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average);  // Expected Result: 2.5