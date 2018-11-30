var xPositions = [40, 87, 131, 172, 205, 246, 287, 335, 380];
var yPositions = [0,0,0,0,0,0,0,0,0];
var colour = floor (random(1, 50));

draw = function() {
   background(234, 240, 242);
    for (var i = 0; i < xPositions.length; i++)  {
        noStroke();
        fill(21, 191, 217);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 9;
 
    if (yPositions [i] >400 ) {
         yPositions [i] = 0;
    }

    }
    

    
};



mouseClicked= function() {
    if ( mouseIsPressed) {
   xPositions.push (mouseX); 
   yPositions.push (mouseY);
  

    }
};
