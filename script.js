// HOME WORK 1 AND 4 Fortune teller

function tellFortune (numOfChildren,partnerName,geograpgic,jobTittle){
    console.log(`You will be a ${jobTittle} in ${geograpgic}, and married to ${partnerName} with ${numOfChildren} kids`);
    }
    
    tellFortune (3,'Zarema','Bishkek','programmer')
    tellFortune (5,'Aidai','Alma-Ata','teacher')
    tellFortune (2,'Anna','San Francisco','loyer');
    

// HOME WORK 2  Age calculate 



let currentYear = 2023;
let birthYear = 1998;
let age = currentYear - birthYear;
let age1 = age - 1;
console.log (`Aziret is ${age} or ${age1} years old `);



// HOME WORK 3 Temperature converter

let celsius = Math.random() * 100;
let celCalc = (celsius * 9 / 5) + 32;
let fahrenheit = Math.random() * 100;
let fahrenCal = (fahrenheit - 32 )* 5 / 9;

console.log (`Today the weather is ${celsius.toFixed()}\u00B0C or ${celCalc.toFixed()}\u00B0F outside`)

console.log (`Today the weather is ${fahrenheit.toFixed()}\u00B0F  or ${fahrenCal.toFixed()}\u00B0C  outside`)

// HOME WORK 4 WITH 1 ONE TOGETHER

// HOME WORK 5  What number is bigger

function whatNUmBig (numOne,numTwo){
    if (numOne > numTwo){
    return `I'm sure that ${numOne} is bigger than ${numTwo}`; 
    }
    else if (numTwo > numOne) {
        return `I think ${numTwo} is  bigger than ${numOne}`
    } 
    else if (numOne === numTwo) {
        return `Theese are absolutely same numbers`
    } 
    
    else {
        return `Something went wrong here, Or my brain can not understand. Can you please check your numbers! `
    }
    
}  

console.log(whatNUmBig(30,20))
console.log(whatNUmBig(15,20))
console.log(whatNUmBig(20,20))
console.log(whatNUmBig(30,'zero'))


// HOME WORK 6 Pluralize


function animals(number,word){
     if (number === 1) {
        return `${number} ${word}`;
     } if ( number === 0) {
         return `I dont have animals`;
     } else {
         return `${number} ${word}s`;
        }
    }
    
    console.log( animals(2,'cat'));
    console.log( animals(0,'cat'));
    console.log( animals(1,'dog'));
    console.log( animals(30,'sheep'));
    console.log( animals(30,'horse'));
    

 // HOME WORK 7.1 SQUARE NUMBER
    
    function squareNum (num){
        const result = num * num;
        console.log(`The result of squaring the number ${num} is ${result}.`);
        return result;
    }
    
    squareNum(4);
    squareNum(7);
    squareNum(21);
    squareNum(32);
    squareNum(43);
    squareNum(65);
    squareNum(75);



// HOME WORK 7.2 HALF NUMBER
    
    function halfNum (num){
        const result = num / 2;
        console.log(`Half of ${num} is ${result}.`);
        return result;
    }
    
    halfNum(70);
    halfNum(54);
    halfNum(786);
    halfNum(7654);
    halfNum(45);
    halfNum(98);
    halfNum(27);


    // HOME WORK 7.3 PERCENT OF


    
    function percentOf(firstNum,secondNum){
        const percent = (firstNum / secondNum) * 100;
        console.log (`${firstNum} is ${percent}% of ${secondNum}.`);
        return percent;
    }
    
    percentOf(13,500);
    percentOf(23,500);
    percentOf(45,500);
    percentOf(65,500);

// HOME WORK 7.4 CIRCLE


    
    function areaOfCircle (radius){
        const area = Math.PI * radius ** 2;
        console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}.`);
        return area;
    }
    areaOfCircle(5)

// HOME WORK 7.5 CALCULATE PERCENTAGE OF CIRCLE

function calculatePercentage(number){
    const half = number / 2;
    const squareHalf = half ** 2;
    const circleArea = Math.PI * squareHalf **2;
    const percentage = (squareHalf / circleArea) * 100;

    return `Half of ${number} is ${half} ,
     And Square for ${half} is ${squareHalf}, 
     Also Circle Area for ${squareHalf} is ${circleArea.toFixed()}, 
     And now we can see that ${squareHalf} is ${percentage.toFixed(2)}% of ${circleArea.toFixed()} Circle area!`;

}

console.log(calculatePercentage(10));
console.log(calculatePercentage(15));
console.log(calculatePercentage(5));
console.log(calculatePercentage(30));








//EVERY DAY CLASS PRACTICE

//calc
const a = 10 ;
const b = 20 ;
const sum = a + b ;
console.log (sum)

//fruit
const numberOfFruit = 5;
const typeOfFruit = 'bananas';
const allTheFruit = 'I have ' + numberOfFruit + ' ' + typeOfFruit + '!';
console.log (allTheFruit)




//calculate tip
const preTip = 75;
const withTip = 15;
const tipAmount = (preTip * withTip) / 100;
const yourBill = preTip + tipAmount;
console.log (`Your total bill, with tip, is $${yourBill.toFixed(2)}`);




//family
let husband = 'Aziret';
let wife = 'Aizhan';
let kid = 'Muhammed';
let mom = 'Gulnisa';
let cityHusband ='Talas';
let cityWife = 'Ak talaa';
let jobHusband = 'programmer';
let jobWife = 'Data Analyst';
let currentHome = 'San Francisco';
let family =(` ${husband} is from  ${cityHusband} and he is married to  ${wife} from ${cityWife}, ${husband} is a ${jobHusband} at Google while ${wife} works at Apple as a ${jobWife}, and they have son his name is ${kid}. Now they live in ${currentHome} with mom, her name is ${mom}`);

console.log (family )