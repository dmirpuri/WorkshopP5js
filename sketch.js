//var rectW;
//var rectH;

//width & height are auto created with createCanvas

function setup(){
  //console.log("Hello World!!");
  createCanvas(500,500); //width,height
  background(0); //color from 0-255 (grey scale), 0 is black

  //RECTANGLE
  //rectMode(CENTER); //will center the starting point xPos yPos

  // rectW = width/2;
  // rectH = height/2;
  //rectW = width/20;
  //rectH = height;

  //rect(100,100,50,250); //xPos,yPos,width,height
  //rect(width/2,height/2,rectW,rectH);
  // rect(0.25*width,height/2,rectW,rectH);
  // rect(0.75*width,height/2,rectW,rectH);

  //COLOR
  //colorMode(HSL); //hue 0-360,saturation 0-100,light 0-100
  //fill(255); //white
  //fill(100,50,75); //rgb,alpha 0-255
  fill(10,10,250);
  //noStroke();

//ELLIPSE
//ellipse(width/2,height/2,50,50);

//TRIANGLE
//triangle(100,150,200,200,50,150);

//LINE
// stroke(0,100,50);
// strokeWeight(5);
// line(100,100,400,400);

  // FOR LOOP
  //for (var i=0; i < 20; i++){
    //rect((rectW+10) * i, height/2, rectW, rectH);

    //rect(i * (width/15), 0, rectW, rectH);
    //fill(i*(360/20), 100, 50);/////

  //}
}

function draw(){
  //background(0); //optional

  numCircles =  map(mouseX, 0, width, 0, 100);

  for (var i=0; i < numCircles; i++){
    fill(random(255),random(255),random(255),random(255))
    ellipse(random(width), random(height), random(10),random(20));

  }
}
