var f = function (x) {
    switch (x) {
        case "J":
           return 11;
        case "Q":
           return 12;
       case "K":
           return 13;
       case "A":
           return 14;
       default:
           return parseInt(x, 10);
    }
};
var cards1 = new Array (), cards2 = new Array ();
var n = parseInt(readline()); // the number of cards for player 1
for (var i = 0; i < n; i++) {
   var cardp1 = readline(); // the n cards of player 1
   cards1.push(f(cardp1.slice(0, cardp1.length - 1)));
}
var m = parseInt(readline()); // the number of cards for player 2
for (var i = 0; i < m; i++) {
   var cardp2 = readline(); // the m cards of player 2
   cards2.push(f(cardp2.slice(0, cardp2.length - 1)));
}
var c1, c2;
var count = 0
var pat = false;
while (true) {
   count++;
   c1 = cards1.shift();
   c2 = cards2.shift();
   if (c1 > c2) {
       cards1.push(c1);
       cards1.push(c2);
   } else if (c1 < c2) {
       cards2.push(c1);
       cards2.push(c2);
   } else {
       var arr1 = new Array (), arr2 = new Array();
       arr1.push(c1); arr2.push(c2);
       while (!pat) {
           if (cards1.length < 4 || cards2.length < 4) {
               pat = true;
               break;
           }
           for (var i = 0; i < 3; i++) {
               arr1.push(cards1.shift());
               arr2.push(cards2.shift());
           }
           c1 = cards1.shift(); arr1.push(c1);
           c2 = cards2.shift(); arr2.push(c2);
           if (c1 > c2) {
               cards1=cards1.concat(arr1); cards1=cards1.concat(arr2); break;
           } else if (c1 < c2) {
               cards2=cards2.concat(arr1); cards2=cards2.concat(arr2); break;
           } 
       }
   }
   if (pat) {
       print("PAT");
       break;
   }
   if (cards1.length === 0) {
       print ("2 " + count);
       break;
   }
   if (cards2.length === 0) {
       print ("1 " + count);
       break;
   }
}