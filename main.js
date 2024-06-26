// object 1 type
var object = {
    name: "Misbah",
    age: 19
};
console.log(object.age);
console.log(object["name"]);
var obj1 = {
    name: "Misbah",
    age: 19
};
console.log(obj1);
// object 3 type
var person = {
    name: "MISBAH",
    isStudent: true,
    age: 19,
    greet: function () {
        console.log("Hello,my name is " + " " + this.name + " " + "My age is" + " " + this.age);
    }
};
person.greet();
