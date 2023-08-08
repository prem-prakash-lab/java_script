// Searching  On Arrays
let arr = [1,4, 2, 5, 4, 7];
console.log(arr);

console.log(arr.indexOf(5)); //3
console.log(arr.indexOf(50)); //-1

//we want to check if a number exist in a array
if(arr.indexOf(4) !=-1)
{
    console.log("present");
}

console.log(arr.includes(5)); //true
console.log(arr.includes(50)); //false