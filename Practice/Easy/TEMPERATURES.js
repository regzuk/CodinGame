var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526


if (n === 0) {
    print ('0');
}
else {
    arr = temps.split(' ');
    var minT = 5526;
    for (var i = 0; i < n; i++) {
        if (Math.abs(minT) > Math.abs(arr[i]))
            minT = arr[i];
        else if (Math.abs(minT) == Math.abs(arr[i])) {
            if (arr[i] > 0 && minT < 0)
                minT = arr[i];
        }
    }
print(minT);
}