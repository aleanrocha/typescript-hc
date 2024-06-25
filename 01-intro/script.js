var firstName = 'João';
var anotherName = 'Paulo';
var x = 1;
var y = true;
var greeting = function (name) {
    console.log("Ol\u00E1, ".concat(name, " :)"));
};
greeting(firstName);
greeting(x);
greeting(y);
