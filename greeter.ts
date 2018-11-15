class Student {
    fullName: string;
    constructor (public firstName, private middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

function studentGreeter(student: Student) {
    return 'Hello, ' + student.fullName;
}

var user = {firstName: 'Jane', lastName: 'User'};
// var invalidUser = ['fsdf', 'sffsdfs'];
var student = new Student('Jane', "M", "Doe");

//document.body.innerHTML = greeter(user);
// document.body.innerHTML = greeter(invalidUser);
// document.body.innerHTML = greeter([]);
// document.body.innerHTML = greeter();
document.body.innerHTML = studentGreeter(student);