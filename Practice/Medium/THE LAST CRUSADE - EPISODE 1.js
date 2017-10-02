[W, H] = readline().split(' '); //number of columns and rows.
map = new Array(H);
for (var i = 0; i < H; i++) {
    map[i] = new Array(W);
    var LINE = readline().split(' ');
    for (var j = 0; j < W; j++) {
        map[i][j] = parseInt(LINE[j], 10);
    }
}
var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

while (true) {
    [XI, YI, POS] = readline().split(' ').map(x=>x=(isNaN(x)) ? x : parseInt(x));
    var type = map[YI][XI];
    var x, y;
    switch (type) {
        case 1:
            x = XI;
            y = YI + 1;
            break;
        case 2:
            if (POS == "LEFT"){
                x = XI + 1;
            }else if (POS == "RIGHT"){
                x = XI - 1;
            }
            y = YI;
            break;
        case 3:
            x = XI;
            y = YI + 1;
            break;
        case 4:
            if (POS == "TOP"){
                x = XI - 1;
                y = YI;
            }else if (POS == "RIGHT"){
                x = XI;
                y = YI + 1;
            }
            break;
        case 5:
            if (POS == "TOP"){
                x = XI + 1;
                y = YI;
            }else if (POS == "LEFT"){
                x = XI;
                y = YI + 1;
            }
            break;
        case 6:
            if (POS == "LEFT"){
                x = XI + 1;
            }else if (POS == "RIGHT"){
                x = XI - 1;
            }
            y = YI;
            break;
        case 7:
        case 8:
        case 9:
            x = XI;
            y = YI + 1;
            break;
        case 10:
            x = XI - 1;
            y = YI;
            break;
        case 11:
            x = XI + 1;
            y = YI;
            break;
        case 12:
        case 13:
            x = XI;
            y = YI + 1;
            break;
        default:
            x = XI;
            y = YI;
            break;
    }
    print(x + ' ' + y);
}