function find(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i], i, array)) {
            return array[i];
        }
    }
}
console.log(find([1, 3, 5, 8], x => (x === 3)))