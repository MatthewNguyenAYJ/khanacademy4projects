background(89, 216, 255);

var centerX1 = 303;
var centerY1 = 193;

var centerX2 = 107;
var centerY2= 263;

var centerX3=133;
var centerY3= 86;


var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);
var drawFish= function(centerX1,centerY1){
noStroke();
fill(bodyColor);
// body
ellipse(centerX1, centerY1, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX1-bodyLength/2, centerY1,
         centerX1-bodyLength/2-tailWidth, centerY1-tailHeight,
         centerX1-bodyLength/2-tailWidth, centerY1+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX1+bodyLength/4, centerY1, bodyHeight/5, bodyHeight/5);
};
drawFish(312,162);
drawFish(100,174);
drawFish(272,60);


// FISH NUMBER TWO!!!!!

var drawFish2 = function(centerX2,centerY2){
fill(224, 51, 20);
// body
ellipse(centerX2, centerY2, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/3;
var tailHeight = bodyHeight/2;
fill(185, 222, 173);
triangle(centerX2-bodyLength/2, centerY2,
        centerX2-bodyLength/2-tailWidth, centerY2-tailHeight,
         centerX2-bodyLength/2-tailWidth, centerY2+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX2+bodyLength/4, centerY2, bodyHeight/5, bodyHeight/5);
};

drawFish2(104,75);
drawFish2(314,340);

//FISH NUMBER THREE!!!!

var drawFish3= function(centerX3, centerY3){

fill(237, 201, 23);
// body
ellipse(centerX3, centerY3, bodyLength+10, bodyHeight);
// tail
var tailWidth = bodyLength/2;
var tailHeight = bodyHeight/1;
triangle(centerX3-bodyLength/2, centerY3,
    centerX3-bodyLength/3-tailWidth, centerY3-tailHeight,
         centerX3-bodyLength/3-tailWidth, centerY3+tailHeight);
// eye
fill(26, 23, 26);
ellipse(centerX3+bodyLength/4, centerY3, bodyHeight/5, bodyHeight/5);

};
drawFish3(112,340);


mouseClicked= function(){
drawFish2(mouseX, mouseY, 20, 20);


};


