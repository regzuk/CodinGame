var surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
var landX = [], landY = [];
for (var i = 0; i < surfaceN; i++) {
  var inputs = readline().split(" ");
  landX.push(parseInt(inputs[0])); // X coordinate of a surface point. (0 to 6999)
  landY.push(parseInt(inputs[1])); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}
var x1, x2, y;
for (var i = 0; i < surfaceN - 1; i++) {
  if (landY[i] === landY[i + 1]) {
    y = landY[i];
    x1 = landX[i];
    x2 = landX[i + 1];
  }
}
var x11 = (3 * x1 - x2) / 2;
var x21 = (3 * x2 - x1) / 2;
var x00 = (x1 + x2) / 2;
var rot = 0, pow = 4, sign = 1;
var x0;
var sit;

var signum = function (x) {
    return x / Math.abs(x);
}

// game loop
printErr(y);
while (true) {
    [X, Y, hSpeed, vSpeed, fuel, rotate, power] = readline().split(" ").map(x => x = parseInt(x));
    
    var dir = 0;
    if (hSpeed !== 0 && X !== x00) dir = signum(hSpeed) * signum(X - x00);
    else dir = -1;
    if (X < x1) {
        sign = -1;
        x0 = x1;
        sit = 2;
        if (X < x11) {
            sit = 1;
        }
    } else if (X > x2) {
        sign = 1;
        x0 = x2;
        sit = 2;
        if (X > x21) {
            sit = 1;
        }
    } else {
        x0 = (x1 + x2) / 2;
        sit = 3;
    }
    
    if (Math.abs(vSpeed) > 60) {
        rot = 0;
        pow = 4;
    } else if (sit === 1) {
        rot = -1 * dir * sign * 22;
        pow = 4;
        if (Math.abs(hSpeed) > 50) {
            rot *= -1;
        }
    } else if (sit === 2) {
        if (Math.abs(hSpeed) > 15) {
            rot = dir * sign * 60;
            pow = 4;
        } else {
            rot = -1 * dir * sign * 10;
            if (Math.abs(vSpeed) > 40)  pow = 4;
            else pow = 3;
        }
    } else if (sit === 3) {
        if (Math.abs(vSpeed) < 15) pow = 3;
        else pow = 4;
        if ((signum(rotate) < 0 && signum(hSpeed) < 0 && signum(X - x00) < 0) || (signum(rotate) > 0 && signum(hSpeed) > 0 && signum(X - x00) > 0))
            dir *= -1;
        if (Math.abs(hSpeed) > 10) rot = dir * sign * 45;
        else rot = dir * sign * 5;
        if (Y - y < 500) rot = 0;
    }
    print(rot + " " + pow);
}