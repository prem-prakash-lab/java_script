//method 1
function createRectangleFunction(ln,br){
    const rectangle={
        length:ln,
        breadth:br,
    
        draw:function(){
            console.log("this is drawing of rectangle");
        },
    
        area:function(){
            console.log(`area of rectangle ${rectangle.length*rectangle.breadth}`);
        }
    };
   return rectangle;
}
let rectangle1=createRectangleFunction(5,6);
console.log(rectangle1.length);
console.log(rectangle1.breadth);
rectangle1.area();

//method2
function createRectangleFunction1(length,breadth){
    const rectangle={
        length,
        breadth,
    
        draw:function(){
            console.log("this is drawing of rectangle");
        },
    
        area:function(){
            console.log(`area of rectangle ${rectangle.length*rectangle.breadth}`);
    
        }
    
    
    };
   return rectangle;
}
let rectangle2=createRectangleFunction1(4,5);
console.log(rectangle2.length);
console.log(rectangle2.breadth);
rectangle2.area();
