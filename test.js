
/* /\ CONSTRUCTOR /\
var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){ 
        console.log(speed*time);
    };
    this.logDriver = function () {
        console.log("driver name is "+ this.driver);
        
    };
};

var myCar = new Car(70, "driver 1");
var myCar2 = new Car(40, "driver 2");
var myCar3 = new Car(10, "driver 3");
var myCar4 = new Car(90, "driver 4");

myCar.drive(30,5);
myCar3.logDriver();
*/

// var myDate = new Date();
// console.log(myDate);

// var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
// var myFutureDate = new Date(2545, 0, 31, 10, 30, 15);

// console.log(myPastDate);
// console.log(myFutureDate);


var birthday = new Date(1987, 5, 2, 11, 15, 25);
var birthday2 = new Date(1987, 5, 2, 11, 15, 25);


console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
    console.log("birthdays are equal");
    
} else {
    console.log("birthdays are not equal");

}