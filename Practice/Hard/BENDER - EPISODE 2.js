var N = parseInt(readline());
var list = new Array (N + 1);
for (var i = 0; i < N; i++) {
    var room = readline().split(' ');
    list[i] = {
        id: +room[0],
        amount: +room[1],
        sum: 0,
        next: [(room[2] == 'E') ? N : +room[2], (room[3] == 'E') ? N : +room[3]]
    };
}
list[N] = {id: N, amount: 0, sum: 0, next: []};
var q = [0];
var checkPath = (v, i) => {
    if (list[v].amount + list[v].sum  > list[list[v].next[i]].sum) {
        q.push(list[v].next[i]);
        list[list[v].next[i]].sum = list[v].amount + list[v].sum;
    }
};
var checkRoom = v => {
    if (v < N) {
        checkPath (v, 0);
        checkPath (v, 1);
    }
};
while (q.length > 0) {
    checkRoom(q.shift());
}

print(list[N].sum);