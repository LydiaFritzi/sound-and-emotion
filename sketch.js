
var mic;
function setup(){
  createCanvas(800,600)
  textSize(35);
  textAlign(CENTER);
  mic = new p5.AudioIn()
  mic.start();
 
}
function draw(){
  noStroke();
  
  background(255);
  var vol = mic.getLevel();
  var X = map(vol,0,1,0,100);
  
  //Yellow is for waking up - orange gives more energy - blue is for Relaxation - pink is against aggression
  var colA = color(239,232,100);
  var colB = color(239,143,50);
  var colC = color(46,68,150);
  var colD = color(247,201,209);
  
//Depending on your voice volume the color changes so the right color for your mood appears
 if (X>0 && X<5) {
 fill(colA);
 text("WAKE UP",400,550);
 }else if(X>5 && X<25){
 fill(colB);
 text("GET ENERGIZED",400,550);
 }else if(X>25 && X<40){
 fill(colC);
 text("RELAX",400,550);
 }else if(X>40 && X<100){
 fill(colD);
 text("CALM DOWN",400,550);
 
 }ellipse(width/2, height/2, 400, 400);
}