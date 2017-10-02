var N = parseInt(readline());
var time = readline();
for (var i = 0; i < N-1; i++) {
    var t = readline();
    if (t < time) time = t;
}
print(time);