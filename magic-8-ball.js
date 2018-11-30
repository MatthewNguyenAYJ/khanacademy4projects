fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(64, 9, 242);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);




var answer = floor(random(1, 50));
if (answer > 16) {
    fill(224, 27, 194);
    textSize(40);
    text ("Yes",169,228);
} else if(answer <14){
    fill(63, 224, 9);
    textSize(40);
    text("No", 169,228);
    
}else{
    fill(204, 33, 33);
    textSize(14);
    text("Sorry, not today.", 154,232);
    text("Try agian next time.", 143,250);
}
