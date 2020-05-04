const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    const arrLength = arr.length;

    let zero = 0;
    let positive = 0;
    let negative = 0;

    arr.forEach((num) => {
        if (num == 0) zero += 1;
        if (num > 0) positive += 1;
        if (num < 0) negative += 1;
    });

    zero = (zero / arrLength).toFixed(6);
    positive = (positive / arrLength).toFixed(6);
    negative = (negative / arrLength).toFixed(6);

    console.log(positive);
    console.log(negative);
    console.log(zero);
}

function plusMinus(arr);