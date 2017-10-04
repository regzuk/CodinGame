function edgeListToAdjList(edgeList, isDirected, isWeighted) {
    isDirected = isDirected || false;
    isWeighted = isWeighted || false;

    var countVertex = edgeList.reduce(((x,y)=>x=Math.max(x, y[0], y[1])),0)+1;
    var adjList = new Array (countVertex);
    for (var i = 0; i < adjList.length; i++) adjList[i] = new Array ();
    edgeList.forEach(x => {
        adjList[x[0]].push((isWeighted) ? {to: x[1], weight: x[2]} : x[1]);
        if (!isDirected) adjList[x[1]].push((isWeighted) ? {to: x[0], weight: x[2]} : x[0]);
    });
    return adjList;
}

function getDataFromAdjList (adjList) {
    var graph = adjList.slice().map (x => x = {adj: x,
                                 color: 0,
                                 deep: -1
                                });
    return graph;
}

function DFS (graph) {
    var dfsVisit  = function (g, node, deep) {
        var curDeep = deep;
        node.color = 1;
        node.adj.forEach (v => {
            var d;
            if (g[v].color === 0) {
                g[v].color = 1;
                d = dfsVisit(g, g[v], deep);
            } else {
                d = g[v].deep + 1;
            }
            if (d > curDeep) curDeep = d;
        });
        node.color = 2;
        node.deep = curDeep;
        curDeep++;
        return curDeep
    };
    graph.forEach (u => {
        if (u.color === 0) {
            dfsVisit(graph, u, 1);
        }
    });
    return graph;
}

var n = +(readline()); // the number of relationships of influence
var list = new Array (n);
for (var i = 0; i < n; i++) {
    list[i] = readline().split(' ').map(y => +y);
}

print (DFS(getDataFromAdjList(edgeListToAdjList(list, true))).reduce((x,y) => x = Math.max(x, y.deep), 0));