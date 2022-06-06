const flat = (array) => {
    let newarray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {

            newarray.push(array[i][j]);

        }
    }

    return newarray;

}
console.log(flat([
    [2, 3, 4],
    [5, 6, 7]

]))