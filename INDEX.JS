// 1- HOW TO PRINT IN JAVASCRIPT
// alert('SHADOW');
// document.write('This is document write');

// 2- JAVASCRIPT Console API
// console.log('Hello World', 4 + 8 + 9 + 7 + 8 + 5, 'ANOTHER LOG');
// console.warn('This is warninig');
// console.error('This is an error');

//    3- JAVASCRIPT VARIABLES
// What are variables - Container to store data values

// ---> COMMENT OUT CONCEPT

/*
Multi 
line 
comment
*/

// 4- DATA TYPES IN JAVASCRIPT

// NUMBERS
var number1 = 34
var number2 = 56
// console.log(number1 + number2);

// STRING
var str1 = ('this is a string');
var str2 = ('this is also a string');

// BOOLEANS
var a = true
var b = false
// console.log(a, b);

var n = null;
// console.log(n);

// PRIMITIVE DATA TYPES = (undefined,null,numbers,srtings,booleans,symbol)
// REFERENCE DATA TYPES = (arrays and objects)

// OBJECTS
var marks =
    ayan = 99
anas = 86

// console.log('var marks');

// ARRAYS
// var arr = [1, 2, 'ayan', 4, 5,];
// console.log(arr);
// console.log(undefined);
// console.log(null);

// 5- OPERATORS IN JAVA SCRIPT

var a = 100
var b = 10
// console.log('The value of a + b is', a + b);
// console.log('The value of a - b is', a - b);
// console.log('The value of a * b is', a * b);
// console.log('The value of a / b is', a / b);

// ASSIGNMENT OPERATORS
var c = b;
c += 2;
// console.log(c);

// 6- COMPARISON OPERATORS

var x = 34
var y = 56
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

// 7- LOGICAL OPERATORS

// (AND OPERATORS)

// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// OR OPERATORS

// console.log(true + true)
// console.log(true + false)
// console.log(false + true)
// console.log(false + false)

// NOT OPERATOR

// console.log(!true)
// console.log(!false)

//  FOR CONCEPT

// 34 + 56 (34 , 56 are operants)
//  + ---> is operator

//  7- FUNCTIONS IN JAVASCRIPT
// FUNCTIONS CAN'T BE REPEATED

// TO GET AVERAGE 

// function avg(a, b) {
//     return (a + b) / 2;
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// 8- CONDITIONALS IN JAVASCRIPT

// var age = 34
// if (age > 8) {
//     console.log('You can drink redbull');
// }
// else{
//     console.log('You cannot drink redbull');
// }


// 9- FOR LOOP

// var arr = [1, 2, 3, 4, 5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// } 

// ALSO ..

var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         // break;
//         // continue;
//     }
//     console.log(arr[i])
// }

// (-----> THIS PROCESS WILL TRUE UNTIL 0 GOES TO 6. COZ 7 IS NOT LESS THEN 7)!


// 10- FOR EACH LOOP

// arr.forEach(function (element) {
//     console.log(element);
// })

// !const! ----> USED WHEN YOU DON'T WANNA CHANGE THE VALUE. IF WE CHANGE BY CHANCE IT WILL SHOW ERROR!

// 11- WHILE LOOP -----> same as for loop!

// 12- ABOUT ARRAYS

let myArr = ['fan', 'camera', 34, null, true];
// Array Methods -->[POP,PUSH,SHIFT,UNSHIFT]
// console.log(myArr.length)
// myArr.pop(); -----> USED TO COMMENT OUT LAST ONE
// myArr.push('AYAN'); -----> USED TO ADD ANOTHER ONE IN LAST
// myArr.shift()
// myArr.unshift('AYAN')
// const newLen = myArr.unshift('AYAN');
// console.log(newLen);
// console.log(myArr);

// 13- STRING METHODS IN JAVASCRIPT

let myLovelyString = 'Ayan is a good boy';

// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf('good'))
// ----> indexOf will tell that on which number is your index is.
// for e.g = in index 'Ayan is a good boy' index of good is 10!
// if we want index of last one then we can use lastIndexOf(''); etc!

// console.log(myLovelyString.slice(0,3));

// slice is used if we want only limited characters
// for e.g if we do (0,3) then it will give us only first 3 characters!

// REPLACE METHOD

d = myLovelyString.replace('Ayan', 'Anas');
d = d.replace('good', 'bad');
// console.log(d, myLovelyString);

// it is used to replace the occurance!

// 14- DATES IN JAVASCRIPT

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// 15- DOM MANIPULATION METHODS

let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container')
// console.log(elem)

// elemClass[0].style.background = 'yellow'
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');

// console.log(elem.innerHTML)
// console.log(elem.innerText)

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// ---> APPEND CHILD

tn = document.getElementsByTagName('div')
// console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText = 'This is a created para';
tn[0].appendChild(createdElement);

// ----> REPLACE CHILD

createdElement2 = document.createElement('p');
createdElement2.innerText = 'This is a created para';
tn[0].replaceChild(createdElement2, createdElement);

// ----> REMOVE CHILD

// removeChild(element);

// 16- SELECTING USING QUERY
sel = document.querySelector('.container')
// console.log(sel)

sel = document.querySelectorAll('.container')
// console.log(sel)

// 17- EVENTS IN JAVASCRIPT

// ---> ON CLICK EVENT

function clicked(){
    // console.log('The button was clicked')
}

// ---> ON LOAD EVENT

window.onload = function(){
    // console.log('The document was loaded')
}

// ---> TO ADD EVENT

// firstContainer.addEventListener('click' , function(){
//     console.log('clicked on container')
// })
    
// SOME EVENTS OF MOUSE ---> (same just put mouseover,mouseout,mouseup,mousedown etc! on place of 'click')

// ---> ANOTHER EVENT TO CHANGE THE TEXT!

// firstContainer.addEventListener('click' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = '<b> WE HAVE CLICKED</b>'
//     console.log('Clicked On Container')
// })

// ---> ARROW FUNCTION
//  It replace Function statement to work fast

// 18- SETTIMEOUT AND SETINTERVAL
 
// SetTimeout used to proceed a program after a selected time inteval!
// SetInterval is used to proceed a program repeatedly! 

// setTimeout(logKaro, 2000);
// logKaro = ()=>{
        // document.querySelectorAll('.container')[1].innerHTML = '<b> Set Timeout Fired</b>'
    // console.log('I am your log')
// }

// 19- bLOCAL STORAGE SKIPPED NEXT !

// 20 - JS0N 

// obj = {name : 'AYAN' , length : 1, a: {this: 'that'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{name : 'AYAN' , length : 1, a: {this: 'that'}}')
// console.log(parsed);

// !

// MANY OTHER THINGS SOME SKIPPED AND SOME USED. NOW FOR PROJECTS LET'S MAKE SOME NEW FILES!
