var a = readline().split(' ');
var isInvalid = false;
var r = [];
var res = [];
if (a.length % 2 !== 0) {isInvalid = true;}
else
    for (var i = 0; i < a.length/2; i++) {
        var b;
        if (a[2*i] === '0') b = '1';
        else if (a[2*i] === '00') b = '0';
        else {
            isInvalid = true;
            break;
        }
        if (a[2*i+1].length === 0 || a[2*i+1].split('').some(x=>x!=='0')) {
            isInvalid = true;
            break;
        }
        for (var j = 0; j < a[2*i+1].length; j++) r.push(b);
    }
if (!isInvalid && r.length % 7 !== 0) {isInvalid = true;}
else 
    for (var i = 0; i < r.length / 7; i++) {
        var c = (['0'].concat(r.slice(i*7, (i+1)*7))).join('');
        res.push(String.fromCharCode(parseInt(c,2)));
    }
print((isInvalid) ? 'INVALID' : res.join(''));