class Person {
    constructor ( name= 'Fatima', age= 3){
        this.name= name;
        this.age= age;
    }
    getDesciption(){
        return `${this.name} is ${this.age} years old`;

    }
    getGreeting(){
        return `HI I am ${this.name}`;
    }

}
class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.Major;
    }
    getDesciption(){
        return 'testing';
        //return `${this.name} is ${this.age} years old`;

    }
}
class Traveler extends Person{
    constructor(name, age, homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }
    getGreeting(){
        let greeting= super.getGreeting();
        if (this.homelocation){
            greeting+= ` I am visiting from ${this.homelocation}`;
        }
        return greeting;
        //return `${this.name} is ${this.age} years old`;

    }
}
const me= new Traveler('Syeda Mamuna', 26, 'Haripur');
console.log(me.getGreeting());

const other= new Traveler();
console.log(other.getGreeting());