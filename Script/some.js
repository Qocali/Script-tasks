function some(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
console.log(some([1, 2, 3, 7], x => x > 0))