
var date :date = new Date();
console.log(date);

var year :number = date.gatFullyear();
console.log(year);


var month :number = date.getMonth();
console.log(month);


var currentDate :number = date.getDate();
console.log(currentDate);

var currentDay :number = date.getDay();
console.log(currentDay);

var currentHour :number = date.getHour();
console.log(currentHour);

var currentMinutes :number = date.getMinutes();
console.log(currentMinutes);





var names : any[] = new Array( arrayLength: 20);

names[0] = "지훈";
names[1] = "은영";

console.log(names[1]);


var students : string[] = ["지훈", "은영", "수진", "준호"];

console.log("students = " + students);
console.log("2번 인덱스의 학생: ", students[2]);

console.log("학생 배열의 길이: ", students.length);

students.push("경민");
console.log("push 후 학생 배열 = " + students);

students.pop("경민");
console.log("pop 후 학생 배열 = " + students);

var numArray1 :number[] = [10, 20];
var numArray2 :number[] = [30, 40, 50, 60];
var numArray = num1.concat(num2);

console.log("배열 잇기(concatenation : " + numArray );

console.log(numArray1 + numArray2);







(function display(message) : void {
   console.log(message);
})("hi");


var display2 = function displayMessage(msg) : void {
    console.log(msg);
}


display2(msg: "I am message");

(function addNumbers(a : number ,b : number ) : void{
    console.log(a + b);
})(a: 3, b:4);




function message() : void {
     document.write("Hello, I am a function without parameter" + "<br/>");
     }

function welcomeMessage(name) : void {
    document.write("welcome " + name + "<br/>");
    }

function addition(num1, num2) : void {
     var sum = num1 + num2;
     document.write("addition is " + sum + "<br/>");
     }

function square(num) {
         return num * num;
         }

message();
welcomeMessage( name: "강경민");
addition(num1: 2, num2: 3);
document.write("sqaure of 5 is " + sqaure(num: 5) + "<br/>");


for (var i :number = 1; i <= 100; i++) {
    if(i == 20) {
       break;
       }
     document.write(i + "<br/>");
}

document.write("===============<br/>");


for (var i :number = 1; i <= 100; i++) {
    if (i == 20){
        continue;
    }
    document.write(k + "<br/>");
}




var i :number = 1
do {
    document.write("멋쟁이사자 : " +i++ + "<br/>");
} while (i <= 10)

document.write("===========<br/>")

var j :num = 1;

while(j < 1) {
    document.write("멋쟁이사자j : " +j++ + "<br/>");
    }



var digit : number = parseInt(prompt( message: "숫자 입력 :"));

switch (digit) {
case 0:
     document.write("Zero");
     break;
case 1:
     document.write("One");
     break;
case 2:
     document.write("Two");
     break;
case 3:
     document.write("Three");
     break;
case 4:
     document.write("Four");
     break;
case 5:
     document.write("Five");
     break;
case 6:
     document.write("Six");
     break;
case 7:
     document.write("Seven");
     break;
case 8:
     document.write("Eight");
     break;
case 9:
     document.write("Nine");
     break;
case 10:
     document.write("Ten");
     break;}



var letter : string = prompt( message: "Enter a letter : ");
letter = letter.toLowerCase();
if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'v') {console.log('vowel');}else{ console.log('cinsonant')}


var num1 : number = parseInt(prompt(message: '첫번쨰 숫자 입력 : '));


var num1 : number = 20;
var num2 : number = 10;
var num3 : string = "10";
var num4 : number = 20;
var num5 : number = 15;

console.log('일반 크기비교')
console.log(num1 > num2, num1, '>', num2);
console.log(num1 >= num2, num1, '>=', num2);
console.log(num1 < num2, num1 '<', num2);
console.log(num1 <= num2, num1, '<=', num2);

console.log('같은지 여부 확인')
console.log(num1 == num4, num1,'==', num4);
console.log(num1 != num4, num1, '!=', num3);

console.log('===')
console.log(num1 === num3, num1, '===', num3);
console.log(num2 === num3, num2, '===', num3);
console.log(num2 == num3, num2, '==', num3);

console.log('num1 > num2 && num1 > num5: ', num1 > num2 && num1 > num5);
console.log('num1 > num2 || num1 > num5: ', num1 > num2 || num1 > num5);


var cels : number = parseFloat(prompt(message:"섭씨 입력: "));
var farn : number = cels * (9 / 5) + 32;

document.write("화씨 : " + farn);


var base = parseFloat(prompt("밑변 입력 : "));
var height = parseFloat(prompt("높이 입력 : "))

var area = base * height * 0.5;

document.write("삼각형의 넓이 : " + area);

var input1 = prompt("Enter first number : ");
var num1  = parseInt(input1);
//
// var num2 = parseInt(prompt("Enter second number : "));
// var lineBreak = "<br/>";
//
// var result = num1 + num2;
// document.write("the sum is : " + result + lineBreak);
//
// result = num1 - num2;
// document.write("the sub is : " + result + lineBreak);
//
// result = num1 * num2;
// document.write("The multiplication is : " + result + lineBreak);
//
// result = num1 / num2;
// document.write("The division is : " + result + lineBreak);
//
// result = num1 % num2;
// document.write("The remainder is : " + result + lineBreak);



// var num = "20"
// num = num.toString();
// console.log(typeof num);
//
// var number = 20;
// console.log(typeof number);
//
// number = number.toString();
// console.log(number, typeof number);
//
// var x = 2.56789
// console.log(x.toFixed(1), typeof x.toFixed(1));
// console.log(x.toFixed(2));
//
// console.log(x.toPrecision(1), typeof x.toPrecision(1));
// console.log(x.toPrecision(2));
//
//
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(" 10"));
// console.log(Number(" 10 "));
// console.log(Number("10.25"));






// var text = prompt("Enter your name:");
// document.write("Your name : " + text + "<br/>");
//
//
// var len = text.length;
// document.write("Number of characters : " + len + "<br/>");
//
// document.write(text.charAt(2) + "<br/>");
//
// document.write(text.toUpperCase() + "<br/>");
// document.write(text.toLowerCase() + "<br/>");
//
// var text1 = "hi, ";
// var text2 = "bye";
// var text3 = text1.concat(text2);
// document.write(text3 + "<br/>");
// document.write(text4 + "<br/>");

// var text4 = "hello";
// var result = text4.slice(1,2);
// document.write(result + "<br/>");


// var lastName = "홍";
// var firstName = "길동";
//
// var fullName = lastName + firstName;
//
// console.log(fullName);
// console.log("Today is" + " a " + "beautiful day");
// console.log("My name is " + fullName);
//
// var num1 = 20;
// var num2 = 30;
// var sum = num1 + num2;
// console.log(num1 + num2);
// console.log("" + num1 + num2);
// console.log(num1 + " + " + num2 + " = " + sum);

// var name = "이승훈";
// var age = 29;
// var cgpa = 3.92;
// var lineBreak = "<br/>"
//
// document.write("이름: " + name + lineBreak);
// document.write("나이: " + age + lineBreak);
// document.write("학점: " + cgpa + lineBreak);


// console.log(123, typeof 123);
// console.log(123.5, typeof 123.5);
// console.log("123", typeof "123");
// console.log(true, typeof true);
// console.log(false, typeof false);

// var car;
// console.log(car);
// var car = "";
// console.log(typeof car);
// console.log();
// var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
// console.log(typeof person, person);
// person = null;
// console.log(typeof person, person);

// document.write("Hello World");
// document.write("<h1>Welcome to JS Program</h1>");
// document.write("<h2>Welcome to JS Program</h2>");
//
// console.log('Welcome JS Program');
// console.info('Welcome JS Program');
// console.warn('Welcome JS Program');
// console.error('Welcome JS Program');
//
// alert('Welcome JS Program');
