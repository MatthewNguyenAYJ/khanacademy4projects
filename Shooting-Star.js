var xPos = 21;
var yPos = 26;
var PosX= 332;
var PosY= 24;
var starPosx= 37;
var starPosy= 298;

draw = function() {
    background(31, 35, 56);
    fill(255, 238, 5);
    ellipse(xPos, yPos,66, 66);
    image(getImage("avatars/robot_male_1"),PosX,PosY,45,54);
    image(getImage("cute/Star"),starPosx,starPosy,62,89);

  
     xPos+=8;
     yPos-=-4;
     PosX+=-7;
     PosY-=-7;
     starPosx+=3;
     starPosy-=8;

};


