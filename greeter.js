function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'User' };
// var invalidUser = ['fsdf', 'sffsdfs'];
document.body.innerHTML = greeter(user);
// document.body.innerHTML = greeter(invalidUser);
// document.body.innerHTML = greeter([]);
// document.body.innerHTML = greeter();