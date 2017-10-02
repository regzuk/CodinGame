var inputs = readline().split(' ');
var W = parseInt(inputs[0]);
var H = parseInt(inputs[1]);
var map = new Array(H);
for (var i = 0; i < H; i++) {
    map[i] = new Array(W)
    var inputs = readline().split(' ');
    for (var j = 0; j < W; j++) {
        var food = parseInt(inputs[j]);
        map[i][j] = food;
    }
}

var stack = new Array ();
stack.push ({x:0, y:0, food:map[0][0]});
var result = 0;
while (stack.length > 0) {
    var a = stack.pop();
    printErr(a.x + ':' + a.y + ':' + a.food);
    if (a.x == W - 1 && a.y == H - 1) {
        var f = a.food;   
        if (f > result) {
            result = f;
            printErr(result);
        }
    }
    else {
        if (a.x < W - 1) {
            stack.push({x:a.x+1, y:a.y, food: a.food + map[a.y][a.x+1]});
        }
        if (a.y < H - 1) {
            stack.push({x:a.x, y:a.y+1, food: a.food + map[a.y+1][a.x]});
        }
    }
}

print(result);