
function checkSpeed (speed) {
    const speedLimt = 70;
    const overSpeed = 5;

    if (speed < speedLimt ) {
        console.log("ok u can go ");
    }else {
        const currentPoint = Math.floor((speed - speedLimt) / overSpeed) ;
        if(currentPoint > 12 )
            console.log("your licience suspended");
        else 
            console.log("points",currentPoint);
    }
    
}

checkSpeed(80);




// function fizzBuzz (input) {
//     if ( typeof input !== 'number') {
//         return "not a number";
//     }
//     if (input%3==0 && input%5 == 0) 
//         return "FizzBuzz";
//     if (input%3!==0 && input%5 !== 0) 
//         return input;
//     if (input%3==0) 
//         return 'fizz';
//     if (input%5==0)
//         return 'buzz';
//     else return input;
    

// }

// console.log(fizzBuzz(7));


// function isLandScape (width , height) {
//    return (width>height) ? true : false;

// }

// isLandScape(12,7);




// function maxTwo (num1, num2) {
//     if(num1> num2) {
//         return console.log("num1",num1);
//     } 
//     if (num1 === num2){
//         return console.log("both are equal");

//     }else {
//         return console.log("num2",num2);
//     }
// };

// maxTwo(8,8);





// let colour = ['reed','blue','green'];

// for(let color of colour) {
//     console.log(color);
// }


// let person = {
//     name:"dinesh",
//     age:30
// };

// for (let key in person) {
//     console.log(key, person[key]);
// }

// let colour = ['reed','blue','green'];

// for(let index in colour) {
//     console.log(index, colour[index]);
// }

// let i = 1;
// while(i<=6) {
//     console.log("i am d",i);
//     i++;
// }





// for(let i = 0 ; i<5 ; i++) {
//     console.log("hi i am dinesh name ",i);
// }





// let hour = 10;

// if(hour >= 6 && hour <12) {
//     console.log("Good Afternoon");
// } else if(hour >= 12 && hour <18) {
//     console.log("Good Evening");
// } else {
//     console.log("good night")
// }






// let a ='red';
// let b ='blue';

// let c=a;
// a= b;

// console.log(a);
// console.log(c);