var bodyX = 205;
var bodyY = 133;
var bodyW = 308;
var bodyH = bodyW/2;
var mouth= bodyH+10;
draw = function() {
    background(219, 102, 24);
    fill(94, 68, 196);
   ellipse(bodyX, bodyY-70, bodyH, 132); // face
   ellipse(bodyX+-1,bodyY+74,bodyH-33,-164);//body
  
  
   fill(161, 13, 13);
   ellipse(bodyX-25,bodyY-79,bodyW-265,bodyH/3);//lefteye
   ellipse(bodyX+25,bodyY-79,bodyW-265,bodyH/3);//righteye
  fill(250, 250, 250);
  arc(bodyX+2,bodyY-52,81,mouth-167,1,180);//mouth
  
mouth+=1;

bodyY+=2;
   };
