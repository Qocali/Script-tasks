function map(array, fn) {
    let newarray = []
    array.forEach((element, index) => {
        newarray.push(fn(element, index, array));
    });
    return newarray;
}
console.log(map([1, 2, 3], x => (x * 2)))