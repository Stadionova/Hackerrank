const arr = [1, 2, 3];

function simpleArraySum(arr) {
    let total = arr.reduce(function(prevNum, nextNum) {
        return +prevNum + +nextNum;
    });
    return total;
}

simpleArraySum(arr);