

var backgroundColor = '#6495ED';
var polySynth;
var velocity = 0.7; // From 0-1
var baseNote = 72;
var keyStates = [0, 0, 0, 0, 0, 0];
var keys_start = [];
var keys_end = [];
var OuterCircleRadius = 340;
var stringHeight = 760;
var key;
var vibration;

let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  sounds = [
  loadSound('https://raw.githubusercontent.com/212mr/m15final/master/music/lute01.mp3'),
  loadSound('https://raw.githubusercontent.com/212mr/m15final/master/music/lute02.mp3'),
  loadSound('https://raw.githubusercontent.com/212mr/m15final/master/music/lute03.mp3'),
  loadSound('https://raw.githubusercontent.com/212mr/m15final/master/music/lute04.mp3'),
  loadSound('https://raw.githubusercontent.com/212mr/m15final/master/music/lute05.mp3'),
  loadSound('https://raw.githubusercontent.com/212mr/m15final/master/music/lute05.mp3')]
}

function setup() {
  createCanvas(600, 800);
  textAlign(CENTER, CENTER);
  strokeWeight(3);
  // Create synth voice
  synth = new p5.PolySynth();
  vibration=true;
}

function draw() {
  //draw circles in the middle
  background(backgroundColor);
  fill('#191970');
  circle(300, 2*height/3, OuterCircleRadius);
  
  fill(backgroundColor);
  circle(300, 2*height/3, OuterCircleRadius - 10);
  
  push();
  stroke('white')
  circle(300, 2*height/3, OuterCircleRadius - 30);
  pop();
  
  fill(backgroundColor);
  circle(300, 2*height/3, OuterCircleRadius - 30);
  
  fill('#191970');
  circle(300, 2*height/3, OuterCircleRadius - 50);
  
  fill('black');
  circle(300, 2*height/3, OuterCircleRadius - 60);
  
  
  fill(40);
  noStroke();
  
  //draw texts
  textSize(20);
  fill('white');
  text('BECOME\nACOUSTIC', 100, 30);
    
  textSize(20);
  fill('white');
  text('29.02.20', 500, 30);
    
  textSize(15);
  fill('white');
  text('LEAP DAY', 100, 750);
  
  //draw black thing below strings
  push();
  beginShape();
  fill('black')
  var shape_x = 170;
  var shape_y = 740;
  vertex(shape_x, shape_y);
  bezierVertex(shape_x-10, shape_y+70, shape_x+250, shape_y+70, shape_x + 255, shape_y);
  endShape()
  pop();
  
  //draw strings
  strings();
  
  //draw white thing below strings
  rect(200, 750, 195, 10, 20);
    
}

function mouseClicked() {
  if (mouseX > 220 && mouseX < 225){
     key= 0
    sounds[key].play()
  }
  if (mouseX > 250 && mouseX < 255){
     key= 1
    sounds[key].play()
  }
  if (mouseX > 280 && mouseX < 285){
     key= 2
    sounds[key].play()
  }
  if (mouseX > 310 && mouseX < 315){
     key= 3
    sounds[key].play()
  }
  if (mouseX > 340 && mouseX < 345){
     key= 4
    sounds[key].play()
  }
  if (mouseX > 370 && mouseX < 375){
     key= 5
    sounds[key].play()
  }
  

}


function strings(){
  var stringWidth = 5;
  for (var i = 0; i < keyStates.length; i++) {
    var keyColor;
    var x_translation = 1
    var space = 25
    var string_state = 0
    fill('white');
    x = 220 + i * stringWidth + space * i
    if (sounds[i].isPlaying() && i == key){
      push();
	  //translate(random(-2,0),random(-2,0));
      
      var amount = 500;
      var frequency = random(1.0)/30;
      var offset = random(5);
      
      beginShape();
      vertex(x, stringHeight);
      for (var c=1; c < amount; c++) {
         var sinoffset = sin(frequency*c);
         var sinY = c*(width/amount);
         var sinX = x + (sinoffset*offset);
         bezierVertex(sinX,sinY,sinX,sinY-1,sinX,sinY);
       }
      endShape();
      pop();
    }else{
    rect(x, 0, stringWidth, stringHeight);
    }
  }
}
