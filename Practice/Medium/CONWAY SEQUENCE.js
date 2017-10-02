var R = parseInt(readline());
var L = parseInt(readline());

var s = [R];
for (var k = 1; k < L; k++) {
    var new_s = [];
    for (var i = 0; i < s.length; i ++) {
        var a = s[i];
        if (new_s.length !== 0 && a === new_s[new_s.length - 1]) {
            new_s[new_s.length - 2]++;
        } else {
            new_s.push(1);
            new_s.push(a);
        }
    }
    s = new_s.slice();
}

print(s.join(' '));