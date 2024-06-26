// object 1 type

let object = {
    name : "Misbah",
    age : 19
}
console.log(object.age);
console.log(object["name"]);


// object 2 type
type person ={
    name : string,
    age : number,
}
let obj1 : person ={
    name : "Misbah",
    age : 19
}
console.log(obj1);

// object 3 type
let person = {
       name : "MISBAH",
       isStudent : true,
       age : 19,
greet : function(){
            console.log("Hello,my name is " +" "+ this.name +" "+ "My age is" +" "+ this.age);
        
    }
}
person.greet();