function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}
console.log(random(5, 15));