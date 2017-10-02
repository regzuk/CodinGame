var n = parseInt(readline());
var inputs = readline().split(' ');
var max = parseInt(inputs[0]);
var min = max;
var m1 = min, m2 = max;
for (var i = 1; i < n; i++) {
    var v = parseInt(inputs[i]);
    if (v < m1) {
        m1 = v;
    }
    if (v > m2) {
        m2 = v;
        m1 = v;
    }
    if (m2 - m1 > max - min) {
        min = m1;
        max = m2;
    }
}

print(min - max);