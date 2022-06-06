function AritmeticMean(array) {
    var ededorta = 0;
    array.forEach(element => {
        ededorta += element
    });
    return (ededorta) / (array.length)
}
console.log(AritmeticMean([1, 2, 3, 4, 5]))