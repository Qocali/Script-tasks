function filter(array, fn) {

    let filterArray = [];
    for (let i = 0; i < array.length; ++i) {
        if (fn(array[i], i, array)) {
            filterArray.push(array[i]);
        } else {
            //do nothing            
        }
    }
    return filterArray;
}
console.log(filter([1, 2, 3, 4], x => x > 1))