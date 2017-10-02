var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialX = parseInt(inputs[2]); // Thor's starting X position
var initialY = parseInt(inputs[3]); // Thor's starting Y position


var X = initialX;
var Y = initialY;

// game loop
while (true) {
   var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    if (X < lightX) {
        if (Y < lightY) {
            print ('SE');
            X++;
            Y++;
        } else if (Y > lightY) {
            print ('NE');
            X++;
            Y--;
        } else {
            print ('E');
            X++;
        }
    } else if (X > lightX) {
        if (Y < lightY) {
            print ('SW');
            X--;
            Y++;
        } else if (Y > lightY) {
            print ('NW');
            X--;
            Y--;
        } else{
            print ('W');
            X--;
        }
    } else {
        if (Y > lightY) {
            print ('N');
            Y--;
        } else {
            print ('S');
            Y++;
        }
    }
     
}