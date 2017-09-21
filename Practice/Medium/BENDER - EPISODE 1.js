[L, C] = readline().split(' ').map(x => x = parseInt(x));
var DIR = ['SOUTH', 'EAST', 'NORTH', 'WEST'];
var map = new Array (L);

for (var i = 0; i < L; i++) {
    var row = readline();
    map[i] = row.split('').slice();
}

class Bender {
    constructor () {
        this.x = -1;
        this.y = -1;
        this.dir = 'SOUTH';
        this.isBreaker = false;
        this.isInverse = false;
    }
    isLoop (path) {
        var last = path[path.length - 1];
        var p = path.filter(x => x.x === last.x && x.y === last.y);
        path[path.length - 1].count = p.length;
        if (p.length > 2 && p.length % 2 === 1) {
            var start, middle, end;
            for (var i = 0; i < path.length; i++) {
                if (path[i].x === last.x && path[i].y === last.y && path[i].count === 1)
                    start = i;
                else if (path[i].x === last.x && path[i].y === last.y && path[i].count === Math.ceil(p.length/2))
                    middle = i;
                else if (path[i].x === last.x && path[i].y === last.y && path[i].count === p.length) {
                    end = i; break;
                }
            }
            if (middle - start !== end - middle) {
                return false;
            }
            for (var i = 0; i < middle - start; i++) {
                if (path[start+i].x !== path[middle+i].x && path[start+i].y !== path[middle+i].y) {
                    return false;
                }
            }
            return true;
        }
        return false;
        
    }
    goToSB (map) {
        //Init position
        for (var i = 0; i < map.length; i++) {
            if (map[i].indexOf('@') !== -1) {
                this.x = map[i].indexOf('@');
                this.y = i;
                break;
            }
        }
        
        var path = new Array ();
        var useTeleport = false;
        var coordPath = new Array ();
        
        while (map[this.y][this.x] !== '$') {
            coordPath.push({x:this.x, y:this.y});
            if (this.isLoop (coordPath)) return ['LOOP'];
            if (map[this.y][this.x] === 'B') this.isBreaker = !this.isBreaker;
            else if (map[this.y][this.x] === 'I') this.isInverse = !this.isInverse;
            else if (map[this.y][this.x] === 'S') this.dir = 'SOUTH';
            else if (map[this.y][this.x] === 'E') this.dir = 'EAST';
            else if (map[this.y][this.x] === 'N') this.dir = 'NORTH';
            else if (map[this.y][this.x] === 'W') this.dir = 'WEST';
            else if (map[this.y][this.x] === 'T' && !useTeleport) {
                for (var k = 0; k < map.length; k++) {
                    var xT = map[k].indexOf('T');
                    if (xT !== -1 && (xT !== this.x || k !== this.y)) {
                        this.x = xT;
                        this.y = k;
                        useTeleport = true;
                        break;
                    }
                }
                continue;
            }
            var x,y;
            var dir = -1;
            var d = new Array ();
            d.push(this.dir);
            for (var j = 0; j < 4; j++)
                d.push((this.isInverse)?DIR[3-j]:DIR[j]);
            do {
                dir++;
                this.dir = d[dir];
                switch(this.dir) {
                    case 'SOUTH':
                        x = this.x; y = this.y + 1;
                        break;
                    case 'EAST':
                        x = this.x + 1; y = this.y;
                        break;
                    case 'NORTH':
                        x = this.x; y = this.y - 1;
                        break;
                    case 'WEST':
                        x = this.x - 1; y = this.y;
                        break;
                }
            } while (map[y][x] === '#' || (map[y][x] === 'X' && !this.isBreaker));
            if (map[y][x] === 'X' && this.isBreaker) map[y][x] = ' ';
            this.x = x;
            this.y = y;
            path.push(this.dir);
            useTeleport = false;
        }
        return path;
    }
}

var bender = new Bender ();
bender.goToSB (map).forEach(x=>print(x));