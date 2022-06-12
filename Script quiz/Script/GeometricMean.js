function GeometicMean(array) {
    let hendesiorta = 1;
    array.forEach(element => {
        hendesiorta *= element
    });
    return Math.sqrt(hendesiorta)
}
console.log(GeometicMean([1, 4, 2, 8]))