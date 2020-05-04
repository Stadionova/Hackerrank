// reduce method
// count sum of all elements

function simpleArraySum() {
    var ar = [1, 2, 3];
    let total = ar.reduce(function(a, b) {
        return +a + +b;
    });
    return total;
}