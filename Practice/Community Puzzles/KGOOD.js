var S = readline().split('');
var K = parseInt(readline());
var result = Math.min(K, S.length);
var i = 0;

while (i + result < S.length) {
    var s = S.slice(i, i + result);
    var count = s.filter((v, i, a) => a.indexOf(v) === i).length;
    if (count < K) {
        result += (K - count);
    } else if (count == K && i + result < S.length && s.indexOf(S[i + result]) !== -1) {
        result++;
    } else {
        i++;
    }
}

print(result);