class Student {
    constructor(studentID) {
        this.studentID = studentID;
        this.answer = [];
    }
    addAnswer(question) {
        this.answer.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }

    checkAnswer(answer) {
        if (this.answer === answer) {
            return true;
        }
    }
}

class Quiz {
    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }

    scoreStudent(sid) {
        let student = this.students.find(s => s.studentID === sid);
        if (!student) return 0;
        return this.questions.reduce((score, question) => {
            let matchingAnswer = student.answer.find(a => a.qid === question.qid);
            if (matchingAnswer && matchingAnswer.answer === question.answer) {
                return score + 1;
            }
            return score;
        }, 0);
    }

    getAverageScore() {
        if (this.students.length === 0) return 0;
        return this.students.map(student => this.scoreStudent(student.studentID))
            .reduce((acc, score) => acc + score, 0) / this.students.length;
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
const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudent(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudent(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5