var numerals = new Array (20);
[L, H] = readline().split(' ').map(x => +x);
for (var i = 0; i < 20; i++) numerals[i] = new Array(H);
for (var i = 0; i < H; i++) {
    var line = readline();
    for (var j = 0; j < 20; j++) {
        numerals[j][i] = line.slice(j*L, (j+1)*L);
    }
}
var S1 = +(readline()) / H;
var firstNumber = new Array (S1);
for (var i = 0; i < S1; i++) {
    firstNumber[i] = new Array (H);
    for (var j = 0; j < H; j++) {
        firstNumber[i][j] = readline();
    }
}
var S2 = +(readline()) / H;
var secondNumber = new Array (S2);
for (var i = 0; i < S2; i++) {
    secondNumber[i] = new Array (H);
    for (var j = 0; j < H; j++) {
        secondNumber[i][j] = readline();
    }
}
var operation = readline();

var getNumeral = function (Numeral) {
    var i = 0, j = 0;
    while (i < 20) {
        if (numerals[i][j] === Numeral[j]) {
            if (j == H -1)
                return i;
            j++;
        }
        else {
            i++;
            j = 0;
        }
    }
    return -1;
};
var getDecimal = function (Number) {
    var result = 0;
    Number = Number.reverse();
    for (var i =0; i <  Number.length; i++) {
        var n = getNumeral(Number[i]);
        result += n * (20 ** i);
    }
    return result;
};

var a = getDecimal(firstNumber);
var b = getDecimal(secondNumber);

var c = 0;
switch (operation) {
    case '+': c = a + b; break;
    case '-': c = a - b; break;
    case '*': c = a * b; break;
    case '/': c = a / b; break;
}
var answer = new Array ();
do {
    answer.push (c % 20);
    c = Math.floor(c / 20);
} while (c !== 0)
answer = answer.reverse();
var answerM = "";
for (var i = 0; i < answer.length; i++) {
    for (var j = 0; j < H; j++) {
        answerM += numerals[answer[i]][j] + "\n";
    }
}

print(answerM);