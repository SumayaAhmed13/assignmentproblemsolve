"use strict";

//1) Javascript For in loop

let Students={
    id:101,
    name:"Sumaya Ahmed",
    profession:'Software developer'
}

const printObjectProperties =(obj)=>{
   if(Object.keys(obj.length === 0)){
     console.log(obj)
   }
   else{
    for(let i in obj){
        console.log(`${i} : ${obj[i]}`)
    }
   }

   

}
printObjectProperties(Students);

//............................................................//
//2) Javascript function returns


const findMaxNumber=(arr)=>{
    if (arr.length === 0){

     return null;
    }
    else{
        let maxValue = arr.reduce((acc, current) => Math.max(acc, current));
        return maxValue;
    }

  

}
const numbers1 = [10, 20, 5, 30, 25];
const numbers2 = [5, 15, 7];
const emptyArray = [];
console.log(findMaxNumber(numbers1));

//............................................................//

//3) javascript Spread Operator


const mergeArrays=(arr1,arr2)=>{

    let newArray=[...arr1,...arr2];
     return newArray;

}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

//............................................................//

//4) Javascript arrow function

 const calculateSquare=(number)=>{
    let value=number ** 2;

    return value;

}

console.log(calculateSquare(8));

//............................................................//
//5) Javascript es6 map

const doubleNumbers=(numbers)=>{

    return numbers.map((num)=>num *2);

}
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));

//............................................................//

//6) javascript es6 static keyword

class MathUtility{
    static multiply(a,b) {
        return a*b
      }
}

console.log(MathUtility.multiply(5, 3));
console.log(MathUtility.multiply(2, 8)); 

//............................................................//

//7) javascript es6 class inheritance

class Animal{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;

    }
    makeSound(){
        console.log(`${this.sound}`);
    }
}

class Dog extends Animal{
    constructor(name,sound)
    {
        super(name,sound);
    }
    
    fetch (){
        console.log("Fetching the ball!");
    }

}
const animal = new Animal("Lion", "Roar");
animal.makeSound(); 

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); 
dog.fetch(); 

//............................................................//
//8) javascript es6 super keyword

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    introduce(){
       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }

}

const person1 = new Person("John", 30);
person1.introduce(); 

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); 





