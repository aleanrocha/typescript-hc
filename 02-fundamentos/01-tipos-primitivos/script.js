// Tipo Primitivos
// 01 - Tipo number
// Tipando variável para número
var num1 = 10;
var num2 = 70.77557;
console.log(num1, typeof num1);
num1 = 50;
console.log(num1, typeof num1);
console.log(num2, typeof num2);
// num2 = 'oi' // O valor não pode ser de um tipo diferente
console.log(num2.toPrecision(4), typeof num2);
// 02 - Tipo String
var firstName = "João";
console.log(firstName.toUpperCase());
var lastName = "Batista";
console.log("Meu nome \u00E9 ".concat(firstName, " ").concat(lastName, " e tenho ").concat(num1, " anos."));
// 03 - Tipo Boolean
var casado = true;
console.log(casado, typeof casado);
