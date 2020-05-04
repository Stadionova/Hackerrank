const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

function diagonalDifference(arr) {
    let sumFirst = 0;
    let sumReversed = 0;

    arr.forEach((num, index) => {
        sumFirst += num[index];
    });

    arr.forEach((num, index) => {
        sumReversed += num.reverse()[index];
    });

    if (sumFirst > sumReversed) {
        var diff = sumFirst - sumReversed;
        return diff;
    } else {
        var diff = sumReversed - sumFirst;
        return diff;
    }
}

diagonalDifference(arr);