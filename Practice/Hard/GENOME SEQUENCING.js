var N = parseInt(readline());
var subsequences = new Array(N);
for (var i = 0; i < N; i++) {
    subsequences[i] = readline();
}

var commonPart = (s1, s2) => {
    var i = Math.min(s1.length, s2.length);
    if (s1.indexOf(s2) !== -1) {
        return 0;
    }
    var res = 0;
    while (i > 0) {
        if (s1.slice(s1.length - i).indexOf(s2.slice(0, i)) === 0) {
            return s2.length - i;
        }
        else i--;
    }
    return s2.length;
};

var generatePermutations = (n) => {
    var swap = (a, i, j) => {
        var c = a[i];
        a[i] = a[j];
        a[j] = c;
    };
    var permutations = new Array ();
    var perm = new Array (n);
    for (var i = 0; i < n+1; i++) perm[i] = i;
    var i = 1;
    while (i !== 0) {
        permutations.push (perm.slice(1).map(x => --x));
        i = n - 1;
        while (perm[i] > perm[i + 1]) i--;
        var j = n;
        while (perm[j] < perm[i]) j--;
        swap(perm, i, j);
        var k = i + 1;
        var m = i + Math.floor((n - i) / 2);
        while (k <= m) {
            swap (perm, k, n - k + i + 1);
            k++;
        }
    }
    return permutations;
};

var map = new Array (N);
for (var i = 0; i < N; i ++) {
    map[i] = new Array (N);
    for (var j = 0; j < N; j++) {
        map[i][j] = commonPart(subsequences[i], subsequences[j]);
    }
}
var p = generatePermutations(N);

var res = subsequences.reduce ((x, y) => x += y.length, 0);
for (var k = 0; k < p.length; k++) {
    var a = subsequences[p[k][0]].length;
    var h = p[k][0];
    for (var l = 1; l < p[k].length; l++) {
        var g = p[k][l];
        var b = map[h][g];
        if (b !== 0) {
            a += b;
            h = g;
        }
    }
    if (a < res) res = a;
}
print(res);