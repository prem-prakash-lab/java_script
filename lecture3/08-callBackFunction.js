// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Prem'
    }
    ,
    {
        No : 2,
        Name : 'Prakash'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Prem"})); //present but false
console.log(objArray.indexOf({No:1,Name:"Prem"})); //present but -1

//callback function
let obj1=objArray.find(function(obj1){
    return obj1.Name=='Prakash';
})
console.log(obj1);


let obj2=objArray.find((obj2)=>{
    return obj2.Name=='Prakash';
})
console.log(obj1);


// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Prem");
console.log(obj);