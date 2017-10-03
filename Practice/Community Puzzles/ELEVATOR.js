function elevator () {
    var inputs = readline().split(' ');
    var n = parseInt(inputs[0]);
    var a = parseInt(inputs[1]);
    var b = parseInt(inputs[2]);
    var k = parseInt(inputs[3]);
    var m = parseInt(inputs[4]);
    
    if (k === m) return 0;
    var up, down, start, finish;
    if (k < m) {
        start = k; finish = m;
        up = a; down = b;
    } else {
        start = m; finish = k;
        up = b; down = a;
    }
    if ((finish - start) % up === 0) return (finish - start) / up;
    
    var diff = up - down;
    var floors = new Array ();
    if (diff > 0) {
        for (var i = finish; i > 0; i -= diff)
            floors.push (i);
        for (var i = 0; i < floors.length; i++) {
            if (floors[i] > start) {
                if ((floors[i] - start) % up === 0) return (floors[i] - start) / up + 2 * i;
            } else if (floors[i] < start) {
                if ((floors[i] - start) % down === 0) return (floors[i] - start) / down + 2 * i;
            }
        }
    } else if (diff < 0) {
        for (var i = finish; i <= n; i -= diff)
            floors.push (i);
        for (var i = 0; i < floors.length; i++) {
                if ((floors[i] - start) % up === 0) return (floors[i] - start) / up + 2 * i;
        }
    }
    return 'IMPOSSIBLE';
}

print(elevator());