var N = parseInt(readline());
var input = readline().split(' ');

var isNegative = (input.indexOf('-') !== -1) ? true : false;
var isFloat = (input.indexOf('.') !== -1) ? true : false;

var numbers = input.filter(x => !isNaN(parseInt(x))).sort((x,y) => (isNegative) ? (x > y) : (x < y));

var result = new Array(N);
if (isNegative) result[0] = '-';
if (isFloat) {
    if (isNegative) result[2] = '.';
    else result[N-2] = '.';
}

var j = 0;
for (var i = 0; i < N; i++) {
    if (result[i] !== undefined && result[i] !== '')
        continue;
    result[i] = numbers[j];
    j++;
}
var res = parseFloat(result.join(''));
if (res === 0) print('0');
else print(res);