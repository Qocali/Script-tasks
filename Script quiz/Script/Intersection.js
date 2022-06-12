// import Unique from "./Unique";

function Intersection(array1, array2) {
    ar1 = unigue(array1);
    ar2 = unigue(array2);
    result = [];
    for (let i = 0; i < ar1.length; i++) {
        for (let j = 0; j < ar2.length; j++) {
            if (ar1[i] === ar2[j]) {
                result.push(ar1[i])
            }
        }

    }
    return result;
}

function unigue(array) {
    const uniquearray = [...new Set(array)];
    return uniquearray;
}
console.log(Intersection([1, 2, 3, 1, 7], [1, 8, 4,
    13
]))