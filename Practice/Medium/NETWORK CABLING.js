const max = x => Math.max.apply (null, x);
const min = x => Math.min.apply (null, x);
var xCoord = [];
var yCoord = [];

var N = parseInt(readline());
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    xCoord[i] = parseInt(inputs[0]);
    yCoord[i] = parseInt(inputs[1]);
}

var length = max(xCoord) - min(xCoord);
yCoord.sort ((a,b) => a-b);
var half = Math.floor (N / 2);
var mediana = (N % 2) ? yCoord[half] : (yCoord[half-1] + yCoord[half]) / 2;
yCoord.map (x => {length += Math.abs(x - mediana);});
print(length);