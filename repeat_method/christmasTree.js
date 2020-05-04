const num = 6;

function staircase(num) {
    let star = '#';
    let space = ' ';
    let numSpaces = num - 1;

    for (let i = 1; i <= num; i++) {
        console.log(space.repeat(numSpaces) + star);
        star += '#';
        numSpaces--;
    }
}

staircase(num);