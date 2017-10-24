var L = parseInt(readline());
var H = parseInt(readline());
var forest = new Array (H);
for (var i = 0; i < H; i++) {
    forest[i] = readline().split('').slice();
}
var lakeArea = (x, y) => {
    if (forest[y][x] == '#') return 0;
    var map = new Array (H);
    for (var i = 0; i < H; i++) map[i] = forest[i].slice();
    var q = new Array ();
    q.push ({x:x, y:y});
    var area = 0;
    while (q.length > 0) {
        var n = q.shift();
        if (map[n.y][n.x] == 'I') continue;
        var e = n.x, w = n.x;
        while (e < L - 1 && map[n.y][e+1] =='O') e++;
        while (w > 0 && map[n.y][w-1] =='O') w--;
        area += e - w + 1;
        for (var i = w; i <= e; i++) {
            map[n.y][i] = 'I';
            if (n.y > 0 && map[n.y - 1][i] =='O') q.push ({x:i, y:n.y-1});
            if (n.y < H - 1 && map[n.y + 1][i] =='O') q.push ({x:i, y:n.y+1});
        }
    }
    return area;
};
var N = parseInt(readline());
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]);
    var Y = parseInt(inputs[1]);
    print(lakeArea(X, Y));
}