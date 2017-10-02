var L = parseInt(readline());
var H = parseInt(readline());
var T = readline().toUpperCase();
for (var i = 0; i < H; i++) {
    var ROW = readline();
    var allStr = "";
    for (var j = 0; j < T.length; j++) {
        var a = T[j];
        var s = a.charCodeAt(0)-65;
        if (s < 0 || s > 26)
        s = 26;
        var str = ROW.substr(s*L, L);
        allStr += str;
    }
    print(allStr);
}