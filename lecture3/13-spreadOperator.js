// Combines two array
let first = [1, 2, 3, 4];
let second = [4, 3, 2, 1];

let combine = [...first, ...second];
console.log(combine);

let combine1 = [...first,'a', ...second,'b'];
console.log(combine1);
