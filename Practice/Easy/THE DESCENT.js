while (true) {
    
    var max_i = 0;
    var maxH = -1;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain.
        if (mountainH > maxH)
        {
            max_i = i;
            maxH = mountainH;
        }
    }

    print(max_i); // The index of the mountain to fire on.
}