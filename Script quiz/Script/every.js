function every(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (!fn(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
console.log(every([1, 2, 3, 7], x => x > 3))