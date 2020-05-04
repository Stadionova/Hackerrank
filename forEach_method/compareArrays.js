const arrFirst = [5, 6, 7];
const arrSecond = [5, 1, 15];

function compareTriplets(arrFirst, arrSecond) {
    let arrFirstCount = 0;
    let arrSecondCount = 0;

    let arr = [];

    arrFirst.forEach((num, index) => {
        if (num > arrSecond[index]) {
            arrFirstCount++;
        } else if (num < arrSecond[index]) {
            arrSecondCount++;
        }
    });

    arr.push(arrFirstCount);
    arr.push(arrSecondCount);

    return arr;
}

function compareTriplets(arrFirst, arrSecond);
console.log('test');