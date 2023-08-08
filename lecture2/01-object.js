const rectangle={
    length:2,
    breadth:4,

    draw:function(){
        console.log("this is drawing of rectangle");
    },

    area:function(){
        console.log(`area of rectangle ${rectangle.length*rectangle.breadth}`);

    }


}
console.log(rectangle.length);
console.log(rectangle.breadth);
rectangle.draw();
rectangle.area();