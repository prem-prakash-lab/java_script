//1st way


function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing')
    }
}
let rectangleObject=new Rectangle(4,6);
console.log(rectangleObject.length);
console.log(rectangleObject.breadth);
rectangleObject.draw();

//2nd way


function Employee(name,age,colony,street) {
    this.name = name;
    this.age = age;

    this.address = {
        street,
        colony,
    }
}

let emp1 = new Employee("prem prakash",22,"kashichak","madhepur");
console.log(emp1.name);
console.log(emp1.address.colony);