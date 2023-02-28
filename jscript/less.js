alert('Hello world!')
let firstNumber = prompt ('Введіть ціну товара (грн): ');
let secondNumber = (firstNumber*10);
let thirdNumber = (secondNumber/100);
let lastStep = (secondNumber-(thirdNumber*3));
console.log("Вартість товару при купівлі 10 штук: ", lastStep, "грн");
let fouNumber = (firstNumber*20);
let fivNumber = (fouNumber/100);
let letStep = (fouNumber-(fivNumber*5));
console.log("Вартість товару при купівлі 20 штук: ", letStep, "грн");
let firstSide = prompt ('Введіть довжину прямокутника: ');
let secondSide = prompt ('Введіть ширину прямокутника: ');
console.log("Прямокутник з сторонами", firstSide,"см", "та", secondSide,"см", "має площу:", firstSide*secondSide);
//   набір даних
let numfir = 1;
let secfir = 1;
let thifir = "three";
let foufir = "three";
let fivfir = 3;
let sixfir = "3";
let sevfir = "5";
let eigfir = 5;
//   ==
console.log(numfir == secfir, "1 i 1");
console.log(numfir == thifir, "1 i three");
console.log(foufir == thifir, "three i three");
console.log(foufir == sixfir, "three i 3(в лапках)");
console.log(thifir == fivfir, "three i 3");
console.log(fivfir == sevfir, "3 i 5(в лапках)");
console.log(eigfir == sevfir, "5 i 5(в лапках)");
//  ===
console.log(numfir === secfir, "1 i 1");
console.log(numfir === thifir, "1 i three");
console.log(foufir === thifir, "three i three");
console.log(foufir === sixfir, "three i 3(в лапках)");
console.log(thifir === fivfir, "three i 3");
console.log(fivfir === sevfir, "3 i 5(в лапках)");
console.log(eigfir === sevfir, "5 i 5(в лапках)");