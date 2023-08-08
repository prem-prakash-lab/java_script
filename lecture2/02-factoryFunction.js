// Factory Function is a fucntion which produces objects when we called it

function createRectangleFunction(){
    const rectangle={
        length:2,
        breadth:4,
    
        draw:function(){
            console.log("this is drawing of rectangle");
        },
    
        area:function(){
            console.log(`area of rectangle ${rectangle.length*rectangle.breadth}`);
        }
    
    
    };
   return rectangle;
}
let rectangle1=createRectangleFunction();
console.log(rectangle1.length);
console.log(rectangle1.breadth);
rectangle1.draw();
rectangle1.area();