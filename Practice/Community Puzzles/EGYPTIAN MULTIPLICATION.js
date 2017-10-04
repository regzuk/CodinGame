var inputs = readline().split(' ');
var a = parseInt(inputs[0]);
var b = parseInt(inputs[1]);

if (b > a) {
    var c = a;
    a = b;
    b = c;
}
var result = a * b;
var answer = a + " * " + b + "\n";
var addPart = "";

while (b !== 0) {
    if (b % 2 === 1) {
        addPart += " + " + a;
        b--;
    } else {
        b /= 2;
        a *= 2;
    }
    answer += "= " + a + " * " + b + addPart + "\n";
}

answer += "= " + result

print(answer);