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
        let score = 0;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].studentID === sid) {
                for (let j = 0; j < this.questions.length; j++) {
                    for (let k = 0; k < this.students[i].answer.length; k++) {
                        if (this.students[i].answer[k].qid === this.questions[j].qid) {
                            if (this.students[i].answer[k].answer === this.questions[j].answer) {
                                score++;
                            }
                        }
                    }
                }
            }
        }
        return score;
    }

    getAverageScore() {
        let sum = 0;
        for (let i = 0; i < this.students.length; i++) {
            sum += this.scoreStudent(this.students[i].studentID);
        }
        return sum / this.students.length
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