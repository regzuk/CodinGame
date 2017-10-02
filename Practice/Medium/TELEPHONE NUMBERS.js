var res = 0;
var N = parseInt(readline());
var numbers = [];
for (var i = 0; i < N; i++) {
    var telephone = readline();
    var l = telephone.length;
    for (var k = 0; k < l; k++) {
        var digits = telephone.slice(0,k+1);
        var b = false;
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j].slice(0,k+1).indexOf(digits) === 0) {
                b = true;
                break;
            }
        }
        if (!b) {
            res += l - k;
            break;
        }
    }
    
    numbers[i] = telephone;
}

print(res);