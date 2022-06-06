function unigue(array) {
    const uniquearray = [...new Set(array)];
    return uniquearray;
}
console.log(unigue(['adil', 'natiq', 'dahi', 'adil']))
    // export default Unique;