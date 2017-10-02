/**
 * Don't let the machines win. You are humanity's last hope...
 **/

var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis

var map = [];
for (var i = 0; i < height; i++) {
    map[i] = [];
    for (var j = 0; j < width; j++) {
        map[i][j] = -1;
    }
}
for (var i = 0; i < height; i++) {
    var line = readline(); // width characters, each either 0 or .
    printErr(line);
    for (var j = 0; j < width; j++) {
        if (line[j] == 0)
            map[i][j] = 1;
    }
}

for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
        if (map[i][j] == -1)
            continue;
        var res = "";
        if (map[i][j] == 1) {
            res += j;
            res += ' ';
            res += i;
            res += ' ';
            var a = -1;
            var b = -1;

            for (var k = j+1; k < width; k++) {
                if (map[i][k] == 1) {
                    a = i;
                    b = k;
                    break;
                }
            }
            res += b;
            res += ' ';
            res += a;
            res += ' ';
            a = -1;
            b = -1;
            
            for (var k = i+1; k < height; k++) {
                if (map[k][j] == 1) {
                    a = k;
                    b = j;
                    break;
                }
            }
            res += b;
            res += ' ';
            res += a;
        }
        print (res);
    }
}