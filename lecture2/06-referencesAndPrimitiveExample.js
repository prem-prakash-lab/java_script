// Primitive Make Copy 
let a = 10;
let b = a;

a++;
console.log(a); //11
console.log(b); //10

// Reference Points Memory Location 
let c = {value:10};
let d = c;

c.value++;
console.log(c.value) //11
console.log(d.value) //11




//pass by value
let a1=12;
function inc(a1){ 
    a1++
    console.log(a1);//13
}
inc(a1);
console.log(a1);//12






let a2={value:10};
function incr(a2){
    a2.value++;
    console.log(a2.value);
}
incr(a2);
console.log(a2.value);