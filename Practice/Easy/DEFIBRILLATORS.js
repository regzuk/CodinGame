const pow = Math.pow.bind(Math);
const sqrt = Math.sqrt.bind(Math);
const dist = (a, b) => sqrt(pow(a[0] - b[0], 2) + pow(a[1] - b[1], 2));

const pos = [0,0].map(x=>+readline().replace(',', '.'));
printErr(pos);

print(new Array (+readline()).fill()
        .map(x => readline().split(";"))
        .map(x => {
            x = {
                name: x[1],
                pos: x.splice(-2).map (x => x.replace(",","."))
            }
            x.d = dist(pos, x.pos);
            return x;
        })
        .sort ((a,b) => a.d - b.d)
        .shift().name
        )