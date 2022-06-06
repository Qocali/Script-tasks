function reduce(array, fn, began) {
    let accumlate = began;
    for (let i = 0; i < array.length; i++) {
        accumlate = fn(accumlate, array[i])
    }
    return accumlate;
}
console.log(reduce([1, 2, 3, 7], (x, y) => (x - y), 0))