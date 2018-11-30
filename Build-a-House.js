background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

//house
fill(255, 255, 255);
rect(60, 150, 280, 207);

var x = 61; 
while ( x < 305) {
    image(getImage("cute/RoofSouth"),x,66,78,292);
    x+= 67;
}

//windows
for ( var x = 72; x < 305; x += 70){
    fill(174, 22, 204);
    rect (x,177,50,50);
}

//door
fill(194, 119, 119);
rect (177,270,50,84);


//grass
var x = -4;
while (x < 310){
    image(getImage("cute/GrassBlock"), x, 323);
    x+= 75;
}


//flowers
for ( var x = 17; x < 360; x += 35){
    noStroke();
    fill(9, 237, 5);
    rect(x+3,346,8,42);
    image(getImage("avatars/leaf-red"), x ,323,25,41);
}
