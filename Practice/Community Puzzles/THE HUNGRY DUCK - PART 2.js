var inputs = readline().split(' ');
var W = parseInt(inputs[0]);
var H = parseInt(inputs[1]);
var map = new Array (H);
for (var i = 0; i < H; i++) {
    map[i] = new Array (W);
    var inputs = readline().split(' ');
    for (var j = 0; j < W; j++) {
        var a = (i > 0) ? map[i-1][j] : 0;
        var b = (j > 0) ? map[i][j-1] : 0;
        var m = Math.max(a, b);
        var food = parseInt(inputs[j]);
        map[i][j] = m + food;
    }
}

print(map[H-1][W-1]);