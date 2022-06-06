function inspect(array, insvalue) {
    let val = 0;
    array.forEach(element => {
        if (element === insvalue) {
            val++;
        }
    });
    if (val > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(inspect([1, 2, 3, 15, 1, 45], 46))