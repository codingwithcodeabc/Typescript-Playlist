// type NameType = {
//     firstName: string,
//     lastName: string
// }
function sayDetails(obj) {
    var firstName = obj.firstName, lastName = obj.lastName, age = obj.age;
    return "Full name: ".concat(firstName, " ").concat(lastName, ", age: ").concat(age);
}
var instructorDetails = {
    firstName: "Shahjala",
    lastName: "Rafi",
    age: 10
};
console.log(sayDetails(instructorDetails));
