function reverse(array) {
    let newarray = [];
    for (let i = array.length; i >= 0; i--) {
        newarray.push(array[i]);
    }
    return newarray;
}
console.log(reverse([1, 2, 5, 7]))