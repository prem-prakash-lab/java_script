function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing')
    };
}
let rectangleObject=new Rectangle(4,6);
console.log(rectangleObject.length);
console.log(rectangleObject.breadth);
rectangleObject.draw();


// Add Property in Object 
rectangleObject.color="yellow";
console.log(rectangleObject);

//Now remove properties from Object
delete rectangleObject.color;
console.log(rectangleObject);


//internally the construtor function work like following
let Rectangle1=new Function(
    'length','breadth',
    `
    this.length=length;
    this.breadth=breadth;
    this.draw=function(){
    console.log('drawing')
    };
    `
    );
let rect=new Rectangle1(2,3);
console.log(rect);