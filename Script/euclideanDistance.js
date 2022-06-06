function euclideanDistance(array1, array2) {
    let cem = 0;
    for (let i = 0; i < array1.length; i++) {
        cem += Math.pow(array2[i] - array1[i], 2)
    }
    return Math.sqrt(cem);
}
console.log(euclideanDistance([8, 4], [7, 7]))