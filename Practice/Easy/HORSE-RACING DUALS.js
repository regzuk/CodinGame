var N = parseInt(readline());
var arr = [];
for (var i = 0; i < N; i++) {
    arr[i] = parseInt(readline());
}
arr.sort((a,b) => a > b);
var res = arr[0];
for (var j = 0; j < N - 1; j++) {
    var a = arr[j+1] - arr[j];
    if (a < res) res = a;
}

print(res);