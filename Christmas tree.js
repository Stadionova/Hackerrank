// repeat
// paint Christmas tree

var star = '#';
var space = ' ';
var numStars = 6;
var numSpaces = numStars - 1;

for (var i = 1; i <= numStars; i++) {
    console.log(space.repeat(numSpaces) + star);
    star += '#';
    numSpaces--;
}