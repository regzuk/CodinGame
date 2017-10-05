var N = +(readline()), C = +(readline());
var budgets = new Array ();
for (var i = 0; i < N; i++) budgets.push(+readline());
budgets.sort((x, y) => y - x);
if (budgets.reduce((x,y) => x += y) < C) print('IMPOSSIBLE');
else {
    var res = (new Array (N)).fill(0);
    var n, c = C, d = 0;
    while (c > 0) {
        n = budgets.filter(x => x > d).length;
        if (c < n) n = c;
        for (var i = 0; i < n; i++) res[i]++;
        c -= n;  d++;
    }
    var answer = "";
    res.reverse().forEach(x => answer += x + "\n");
    print (answer);
}