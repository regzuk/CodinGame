var x = readline().split('-');
var n = parseInt(readline());

const A = "A".charCodeAt();
const f = Math.floor;

var res = new Array (3);
var a = +x[1] + ((x[2].charCodeAt(0) - A) * 26 + (x[2].charCodeAt(1)) - A) * 1000 +
        ((x[0].charCodeAt(0) - A) * 26 + (x[0].charCodeAt(1) - A)) * 26 * 26 * 1000;

var d = n;
var a_ = a + n;
while (1) {
    var k = f(a/ 1000);
    var l = f(a_/1000);
    d = l - k;
    if (d === 0) break;
    a = a_;
    a_ += d;
}
a = a_;
var b = a % 1000;
var c = new Array (3);
c[0] = f(b/100); c[1] = f((b%100) / 10); c[2] = b % 10;
res[1] = c.join('');

b = f(a / 1000);
b = b % (26 * 26);
res[2] = String.fromCharCode(f(b/26) + A, b % 26 + A);

b = f(a / (26 * 26 * 1000));
res[0] = String.fromCharCode(f(b/26) + A, b % 26 + A);

print(res.join('-'));