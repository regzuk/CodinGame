var N = parseInt(readline());
var stones = readline().split(' ').map (x => x = +x);

var isChange = true;

while (isChange) {
    isChange = false;
    
    stones.sort ((a,b) => a > b);
    var l = stones.length;
    for (var i = 0; i < l; i++) {
        var a = stones.shift();
        if (stones[0] === a) {
            a = stones.shift() + 1;
            isChange = true;
            l--;
        }
        stones.push(a);
    }
}

print (stones.length);