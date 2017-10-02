var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var table = {};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    table[inputs[0].toLowerCase()] = inputs[1];
}
for (var i = 0; i < Q; i++) {
    var file = readline().toLowerCase().split('.');
    if (file.length > 1 && table[file[file.length -1]]) {
        print (table[file[file.length -1]]);
    } else {
        print('UNKNOWN');
    }
}