function sum(array) {
    var sum = 0;
    for (i in array) {
        sum += array[i]
    }
    return sum;
}
console.log(sum([1, 2, 10]))