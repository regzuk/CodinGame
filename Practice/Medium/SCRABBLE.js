var points = { "a": 1, "b": 3,
"c": 3, "d": 2,
"e": 1, "f": 4,
"g": 2, "h": 4,
"i": 1, "j": 8,
"k": 5, "l": 1,
"m": 3, "n": 1,
"o": 1, "p": 3,
"q": 10, "r": 1,
"s": 1, "t": 1,
"u": 1, "v": 4,
"w": 4, "x": 8,
"y": 4, "z": 10
};

var words = new Array(+readline()).fill()
.map(x => {
x = {
word: readline(),
points: 0,
letters: []
};
return x;
});
var letters = readline().split('');
words.map (x => x.letters = letters.slice());
words.map (x => {
x.word.split('')
.map(y => {
var ind = x.letters.indexOf(y)
if (ind !== -1) {
x.points += points[y];
x.letters.splice(ind, 1);
}
else
x.points = -1000;
})
});
print(words.sort((a,b) => b.points - a.points)
.shift().word);