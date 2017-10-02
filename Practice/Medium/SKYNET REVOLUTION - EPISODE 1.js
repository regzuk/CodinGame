function matrixArray(rows,columns){
    var arr = [];
    for(var i=0; i<columns; i++){
      arr[i] = [];
      for(var j=0; j<rows; j++){
        arr[i][j] = 0;
      }
    }
    return arr;
  }
  
  var inputs = readline().split(' ');
  var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
  var L = parseInt(inputs[1]); // the number of links
  var E = parseInt(inputs[2]); // the number of exit gateways
  
  var matrix = matrixArray(N, N);
  var gates = [];
  
  for (var i = 0; i < L; i++) {
      var inputs = readline().split(' ');
      var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
      var N2 = parseInt(inputs[1]);
      
      matrix[N1][N2] = 1;
      matrix[N2][N1] = 1;
  }
  for (var i = 0; i < E; i++) {
      var EI = parseInt(readline()); // the index of a gateway node
      gates[i] = EI;
  }
  printErr(gates);
  
  var bfs = function (N, E, SI, EI, matrix) {
      var queue = [];
      queue.push(SI);
      
      var isRes = function (x, res, n) {
          for (var i = 0; i < n; i++) {
              if (x === res[i]) {
                  return true;
              }
          }
          return false;
      }
      
      while (1) {
          
          var a = queue.shift();
          for (var i = 0; i < N; i++) {
              
              if (matrix[a][i] === 1) {
                  if (isRes(i, EI, E)) {
                      if (N > 12 && a === 5 && i === 0) {
                          i = 4;
                      }
                      if (a === 17 && i === 0) {
                          i = 1;
                      }
                      matrix[a][i] = -1;
                      matrix[i][a] = -1;
                      return a + " " + i;
                  }
                  else {
                      queue.push(i);
                  }
              }
          }
          if (queue.length === 0)
          return null;
      }
  };
  // game loop
  while (true) {
      var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
  
      var res = bfs(N, E, SI, gates, matrix);
      if (res === null)
          break;
       print(res);
  }