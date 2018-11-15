var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
function studentGreeter(student) {
    return 'Hello, ' + student.fullName;
}
var user = { firstName: 'Jane', lastName: 'User' };
// var invalidUser = ['fsdf', 'sffsdfs'];
var student = new Student('Jane', "M", "Doe");
//document.body.innerHTML = greeter(user);
// document.body.innerHTML = greeter(invalidUser);
// document.body.innerHTML = greeter([]);
// document.body.innerHTML = greeter();
document.body.innerHTML = studentGreeter(student);
