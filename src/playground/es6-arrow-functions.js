//babel public\src\playground\es6-arrow-functions.js --out-file=public/scripts/app.js--presets=env,react --watch
// const square = function(x){
//     return x * x;
// };
// console.log(square(8));
// const squareArrow= (x) =>  x*x;
// console.log(square(2));


// const getFirstName= (fullName) => fullName.split(' ')[1];

// console.log(getFirstName('Syeda Mamuna Hussain'));

const user= {
    name: 'syeda mamuna',
    interests: ['english', 'persian', 'coding'],
    // printInterests(){
    //     this.interests.forEach((city) => {
    //         console.log(this.name + ' is interested in ' +city);
    //     });
    // }
    printInterests(){
        return this.interests.map((interest) => this.name+ ' is interested in ' +interest+'!');        
    }

};
console.log(user.printInterests());

const multiplier= {
    numbers: [2 , 4 , 6],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number)=> number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());
