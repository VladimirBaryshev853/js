let firstName = "Vladimir";
let lastName = "Baryshev";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let c = 5;
let d = 10;
let S = c * d;
console.log(S);

console.log(10 ** 6);

console.log(Math.floor(Math.random() * 50));

let number = 8;
number === 7 ? console.log("negative value") : console.log("positive value");

let text = "какаяСтрока";
text > 1;
console.log(text[text.length - 2]);

let numberr = 3;
switch (number) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("Desember");
        break;
    default:
        console.log("There is no such month");
}

let password = "12345&";
if (password.length > 5 && password.indexOf("&")) {
    console.log("this password is strong");
} else {
    console.log("this password is weak")
}

let a = 5;
let b = 5;
let numbers = a + b;
console.log(a + b === numbers ? console.log("10") : console.log("Sum of those items can't be counted"));

let textOne;
let textTwo;
if (textOne === 'string' && textTwo === 'string' && textOne.length === textTwo.length) {
    console.log("those items are strings and they're equal")
} else {
    console.log("items are not compareble")
}