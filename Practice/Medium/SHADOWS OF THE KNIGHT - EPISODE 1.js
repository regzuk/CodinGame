[w, h] = readline().split(' ').map(x => x = parseInt(x));
var w0 = 0, h0 = 0;
var N = parseInt(readline()); // maximum number of turns before game over.
[x, y] = readline().split(' ').map(x => x = parseInt(x));
var isXCeil = true, isYCeil = true;

w--;
h--;
// game loop
while (true) {
    var bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    printErr(bombDir);
    if (bombDir.indexOf('U') !== -1) {
        h = y;
        isYCeil = false;
    } else if (bombDir.indexOf('D') !== -1) {
        h0 = y;
        isYCeil = true;
    } else {
        h = h0 = y;
    }
    if (h0 === 0 && h === 1) {
        h0 = -1;
    }
    if (bombDir.indexOf('L') !== -1) {
        w = x;
        isXCeil = false;
    } else if (bombDir.indexOf('R') !== -1) {
        w0 = x;
        isXCeil = true;
    } else {
        w = w0 = x;
    }
    if (w0 === 0 && w === 1) {
        w0 = -1;
    }
    x = (isXCeil) ? Math.ceil((w+w0)/2) : Math.floor((w+w0)/2);
    y = (isYCeil) ? Math.ceil((h+h0)/2) : Math.floor((h+h0)/2);
    // the location of the next window Batman should jump to.
    print(x+' '+y);
}