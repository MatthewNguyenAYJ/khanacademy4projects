background(215, 235, 115);

var book = [

{   title: "The Giver",
    stars: 4,
    author: "Lois Lowry"
},

{   title: " Harry Potter",
    stars: 3,
    author: "J. K. Rowling."
},

{   title: " Goosebumps",
    stars: 2,
    author: "R. L. Stine"
}


];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw one book
fill(214, 255, 219);
rect(10, 20, 90, 100);
fill(0, 0, 0);
text(book[0].title, 15, 29, 70, 100);
text(book[0].author, 15, 47, 70,101);
for (var i = 0; i < book[0].stars; i++) {
    image(getImage("cute/Star"), 13 + i * 20, 90, 20, 30);
}  
//Book 2
fill(212, 131, 201);
rect(118, 20, 90, 100);
fill(0, 0, 0);
text(book[1].title, 15*8, 29, 70, 100);
text(book[1].author, 15*8, 47, 70,101);
for (var i = 0; i < book[1].stars; i++) {
    image(getImage("cute/Star"), 119 + i * 24, 90, 20, 30);
}  

//book 3
fill(30, 186, 189);
rect(227, 20, 90, 100);
fill(0, 0, 0);
text(book[2].title, 15*15, 29, 70, 100);
text(book[2].author, 15*15.5, 47, 70,101);
for (var i = 0; i < book[2].stars; i++) {
    image(getImage("cute/Star"), 230 + i * 25, 90, 20, 30);
}  

 var mouseClicked= function() {
    image(getImage("avatars/spunky-sam-orange"), 161, 154);
    text("I love to read", 102, 245);  
    };
    
fill(255, 0, 0);
text("Click anywhere", 304,370);
