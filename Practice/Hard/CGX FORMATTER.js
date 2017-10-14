var N = parseInt(readline());
var cgx = "";
for (var i = 0; i < N; i++) {
    var cGXLine = readline();
    cgx += cGXLine
}

var arr = new Array ();
var str = "", cleanCGX = new Array ();
var openQuotes = false;
cgx.split('').forEach (c => {
    if (c == '\'') openQuotes = !openQuotes;
    if (openQuotes || (c !== ' ' && c !== '\t'))
        cleanCGX.push(c);
});
for (var i = 0; i < cleanCGX.length; i++) {
    var c = cleanCGX[i];
    if (c == '\'') openQuotes = !openQuotes;
    if (c == '(' && !openQuotes) {
        if(str.length > 0) arr.push(str);
        str = "";
        arr.push(c);
    } else if (c == ')' && !openQuotes) {
        if(str.length > 0) arr.push(str);
        str = ")";
        if (i < cleanCGX.length - 1 && cleanCGX[i+1] == ';') {
            i++;
            str += ';';
        }
        if(str.length > 0) arr.push(str);
        str = "";
    } else {
        str += c;
        if (c == ';' && !openQuotes) {
            arr.push(str);
            str = "";
        }
    }
}
if(str.length > 0) arr.push(str);

var spaceCount = 0;
const spaces = '    ';
var res = "";
arr.forEach (x => {
    if(x == ')' || x == ');') {
        spaceCount--;
    }
    for (var i = 0; i < spaceCount; i++) {
        res += spaces;
    }
    res += x + '\n';
    if (x == '(') {
        spaceCount++;
    }
});

print(res);