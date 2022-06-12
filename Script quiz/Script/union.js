 function union(array1, array2) {
     let newarray = [...array1, ...array2];
     return newarray
 }
 console.log(union([1, 2, 16], [2, 14, 57]))