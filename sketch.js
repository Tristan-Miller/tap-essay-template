var screen = 6;
var numberOfPages = 6;
var miniver;
var maxDiameter; 
var theta; 
var arrowX = 75;
var arrowY = 70;
var arrowWidth = 200/4;
var arrowHeight = 150/4;
var canvasWidth = 960;
var canvasHeight = 540;
var axeClicked;
var knifeClicked;
var allToolClicked;
let shapeX;
let shapeY;
const radius = 50;
const diameter = radius*2;
let grabbed = false;
var audio;
var flash = 1;
var flashTimeout = 0;
var thumbClicked = 0;

var walk = 1;
var sitting = 1;
var sitting2 = 1;

var eyeLeft = 1;
var eyeRight = 1;


var count = 0;
const x7 = 100;
const y7 = 85;
var myTextAsLetters;

var showText7 = 0

let e1, e2// e3;

let opacity = 0;

var moved = false;

var faceRise = 0;

let y, x, x2, xLeaf, xLeaf2, x3;

var fadeIn = 0;
var fadeOut = 255;
var fadeOutTimer = 0;
var fadeInTimer = 0;

var beetleMove = 1;
let shapeX2;
let shapeY2;
let shapeX3;
let shapeY3;

var bugShadow = true;

var bugChewing = 0;

var bugChange = false;

var bgNoiseOn = true;

var treeGrow = 0;

function preload() {
  miniver = loadFont('assets/RobotoSlab-Regular.ttf');
    
  bgNoise = loadSound('assets/sounds/backgroundNoise.mp3');
  Screen2sound = loadSound('assets/sounds/screen2sound.mp3');
  Screen3sound = loadSound('assets/sounds/screen3sound.mp3');
  Screen4sound = loadSound('assets/sounds/screen4sound.mp3');
  Screen5sound = loadSound('assets/sounds/screen5sound.mp3');
  Screen6sound = loadSound('assets/sounds/screen6sound.mp3');
  Screen7sound = loadSound('assets/sounds/screen7sound.mp3');
  Screen8sound = loadSound('assets/sounds/screen8sound.mp3');
  Screen9sound = loadSound('assets/sounds/screen9sound.mp3');
  Screen10sound = loadSound('assets/sounds/screen10sound.mp3');
  Screen10Asound = loadSound('assets/sounds/screen10Asound.mp3');
  Screen11sound = loadSound('assets/sounds/screen11sound.mp3');
  Screen12sound = loadSound('assets/sounds/screen12sound.mp3');
  Screen13sound = loadSound('assets/sounds/screen13sound.mp3');
    
  click = loadSound('assets/sounds/click.mp3');

  bgImage = loadImage('assets/background.jpg');
  whiteboarder = loadImage('assets/whiteboarder.png'); 

  wedgeOn = loadImage('assets/tools/wedgeOn.png');
  wedgeOff = loadImage('assets/tools/wedgeOff.png');
  axeOn = loadImage('assets/tools/axeOn.png');
  axeOff = loadImage('assets/tools/axeOff.png');
  knifeOn = loadImage('assets/tools/knifeOn.png');
  knifeOff = loadImage('assets/tools/knifeOff.png');

  screen1Bettle = loadImage('assets/screen1Bettle.png');
  smallBeetle1 = loadImage('assets/smallBeetle1.png');
  smallBeetle2 = loadImage('assets/smallBeetle2.png');
    
  thumbUnclicked = loadImage('assets/thumb/thumbUnclicked.png');
  thumbClicked1 = loadImage('assets/thumb/thumbClicked1.png');
  thumbClicked2 = loadImage('assets/thumb/thumbClicked2.png');
  thumbClicked3 = loadImage('assets/thumb/thumbClicked3.png');
    
  hand = loadImage('assets/hand.png');
  handFlipped = loadImage('assets/handFlipped.png');
  handFlippedGrab = loadImage('assets/handFlippedGrab.png');
  longArm = loadImage('assets/longArm.png');
  longArmGrab = loadImage('assets/longArmGrab.png');
  handpoint = loadImage('assets/handPoint.png');
  arrow = loadImage('assets/arrow.png');
    arrowFlip = loadImage('assets/arrowFlip.png');

  pupil = loadImage('assets/pupil.png');
  leftEye = loadImage('assets/leftEye.png');
  rightEye = loadImage('assets/rightEye.png');
  leftShutFull = loadImage('assets/leftShutFull.png');
  leftShutMid = loadImage('assets/leftShutMid.png');
  rightShutFull = loadImage('assets/rightShutFull.png');
  rightShutMid = loadImage('assets/rightShutMid.png');
  //285 × 270

    face = loadImage('assets/face.png');
    faceBlink = loadImage('assets/faceBlink.png');

    
  flashGreen = loadImage('assets/flashGreen.png');
  flashPurple = loadImage('assets/flashPurple.png');
  flashOrange = loadImage('assets/flashOrange.png');
  flashWhite = loadImage('assets/flashWhite.png');


    
  
    
  walk1 = loadImage('assets/walk1.png');
  walk2 = loadImage('assets/walk2.png');
  walk3 = loadImage('assets/walk3.png');
  walk1F = loadImage('assets/walk1Flip.png');
  walk2F = loadImage('assets/walk2Flip.png');
  walk3F = loadImage('assets/walk3Flip.png');
  still = loadImage('assets/still.png');
  leftCut1 = loadImage('assets/leftCut1.png');
  leftCut2 = loadImage('assets/leftCut2.png');
  middleSit = loadImage('assets/middleSit.png');
  rightCut1 = loadImage('assets/rightCut1.png');
  rightCut2 = loadImage('assets/rightCut2.png');

  tree9 = loadImage('assets/tree9.png');
  leaf = loadImage('assets/leaf.png');
  leafShadow = loadImage('assets/leafShadow.png');
    
    bugThumb1 = loadImage('assets/bugThumb1.png');
    bugThumb2 = loadImage('assets/bugThumb2.png');
     bugThumb3 = loadImage('assets/bugThumb3.png');
    splinter = loadImage('assets/splinter.png');
    
    thumbNoBug = loadImage('assets/thumbNoBug.png');
    thumbWithBug = loadImage('assets/thumbWithBug.png');
    treeSmall = loadImage('assets/treeSmall.png');
    treeMed = loadImage('assets/treeMed.png');
    treeBig = loadImage('assets/treeBig.png');
    
     restart = loadImage('assets/restart.png');
}


function setup() {

  var canv = createCanvas(canvasWidth,canvasHeight);
  canv.parent("canvas-container");
  textFont(miniver);
  textAlign(BASELINE);
  imageMode(CENTER);

    
 // make div#canvas-container the parent of the created canvas
  canv.mouseMoved(canvasMouseMove);
    
  maxDiameter = 20; 
  theta = 0; 
  textSize(35);
  axeClicked = false;
  knifeClicked = false;
  allToolClicked = 0;
  shapeX = 800;
  shapeY = 250;
  shapeX2 = 755;
  shapeY2 = 163;
  shapeX3 = 270;
  shapeY3 = 410;
  audio = false;
    
  var myText = "son you've got a splinter haven't you   " ;
  myTextAsLetters = split(myText, ' ');
y = height;
x = 0;
x3 = 0;
x2 = 201.13
xLeaf = 0;
xLeaf2 = 401.44
 

  
}



 

function draw () {
    
 print(showText7);
 //print(fadeOut);
//print(grabbed); 
  if (screen==1) {
      if(bgNoiseOn == true){
          bgNoise.play();
          bgNoiseOn = false;
      }
      cursor();
        textSize(40);
    textAlign(BASELINE);
   // noCursor();
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    image(screen1Bettle, 250, canvasHeight/2+10, 690/2.7, 670/2.7);
    fill(255);
      
          if(fadeIn < 255){
            fill(255,255,255, fadeIn);
            text("A Wattle Beetle story", 425,height/2+10);
            fadeIn = fadeIn + 2;
          }else{
            fill(255);
            text("A Wattle Beetle story", 425,height/2+10);
          }
    //image(bettleOff,225,height/2,300,300);
   // image(pointer, mouseX + 15, mouseY + 20,100/3, 140/3)
     
     if (mouseX < 300 && mouseX > 200 && mouseY < 350 && mouseY > 200) {
         textSize(30);
        image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
        image(screen1Bettle, 250, canvasHeight/2+10, 690/2.7+10, 670/2.7+10);
        //image(bettleOn,225,height/2,350,350);
        text("Pictures by Tristan Miller \nWords by Uncle Greg Simms", 425,height/2-10);
      //  image(pointer, mouseX + 15, mouseY + 20,100/3, 140/3)
     }
 }
    
  else if (screen == 1.5){
     textAlign(CENTER);
      if(fadeInTimer < 500){
         image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
          if(fadeIn < 255){
            fill(255,255,255, fadeIn);
            text("I acknowledge this is the land of the Gadigal people \n of the Darug Nation. I acknowledge Uncle Greg Simms as an Elder \n and Knowledge Holder of these lands as a Dadigal, Darug, \n Gundungurra, Yuin man. I acknowledge these are his stories. ", width/2,height/2 - 30);
            fadeIn = fadeIn + 5;
          }else{
            fill(255);
            text("I acknowledge this is the land of the Gadigal people \n of the Darug Nation. I acknowledge Uncle Greg Simms as an Elder \n and Knowledge Holder of these lands as a Dadigal, Darug, \n Gundungurra, Yuin man. I acknowledge these are his stories. ", width/2,height/2  - 30);
          }
          fadeInTimer++;
      }
       
      if(fadeOutTimer < 130 && fadeInTimer == 500){
           image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
          if(fadeOut > 1){
           fill(255,255,255, fadeOut);
           text("I acknowledge this is the land of the Gadigal people \n of the Darug Nation. I acknowledge Uncle Greg Simms as an Elder \n and Knowledge Holder of these lands as a Dadigal, Darug, \n Gundungurra, Yuin man. I acknowledge these are his stories. ", width/2,height/2  - 30);
           fadeOut = fadeOut - 5; 
          }
          fadeOutTimer++;
      }else if( fadeOutTimer == 130){
          screen = 2;
          fadeOutTimer = 0;
          fadeInTimer = 0;
          Screen2sound.play();
          bgNoise.stop();
          textSize(30);
          fadeIn = 0;
          fadeOut = 255;
      }
     image(arrowFlip, arrowX, arrowY, arrowWidth, arrowHeight);
 }
  
  else if (screen==2) {
        textSize(30);
      textAlign(CENTER);
      image(bgImage, width/2, height/2, canvasWidth, canvasHeight)
      
      
       //text fade In/out
     
      if(fadeInTimer < 250){
          if(fadeIn < 255){
            fill(255,255,255, fadeIn);
            text("Well, we used to go to the bush \n with the old people and we'd sit there with them...", width/2,height/2-15);
            fadeIn = fadeIn + 10;
          }else{
            fill(255);
            text("Well, we used to go to the bush \n with the old people and we'd sit there with them...", width/2,height/2-15);
          }
          fadeInTimer++;
      }
       
      if(fadeOutTimer == 250){
          if(fadeOut > 1){
           fill(255,255,255, fadeOut);
           text("Well, we used to go to the bush \n with the old people and we'd sit there with them...", width/2,height/2-15);
           fadeOut = fadeOut - 10;
          }
      }else{
          fadeOutTimer++;
      }
      
      var diam = 300 + sin(theta) * maxDiameter ;
      fill(255, 226, 36, 13);
      strokeWeight(0);
      ellipse(780,505, diam, diam);
      ellipse(780,515, diam, diam); 
      ellipse(780,525, diam, diam); 
      
      theta += 0.5;
      
      if (moved == true){
          if (walk < 10){
            image(walk1, mouseX, 480, 100/2, 160/2);
            walk++;
        }else if(walk >= 10 && walk < 20){
            image(walk2, mouseX, 480, 100/2, 160/2);
            walk++;
        }else if (walk >= 20 && walk < 30){
            image(walk3, mouseX, 480, 100/2, 160/2);
            walk++;
        } else if (walk >= 30 && walk < 40){
            image(walk2, mouseX, 480, 100/2, 160/2);
            walk++;
        }
          
        if (walk == 40){
            walk = 1;
        }
      } else if (moved == false){
          image(still, mouseX, 480, 100/2, 160/2);
      }
      
      
      
      
     

     
      
      if (sitting < 15){
            image(leftCut1, 780, 480, 100/2, 200/2);
            sitting++;
        }else if(sitting >= 15 && sitting < 30){
            image(leftCut2, 780, 480, 100/2, 200/2);
            sitting++;
        }
      if (sitting == 30){    
            sitting = 1;
        }
      
       if (sitting2 < 15){
            image(rightCut2, 840, 480, 100/2, 200/2);
            sitting2++;
        }else if(sitting2 >= 15 && sitting2 < 30){
            image(rightCut1, 840, 480, 100/2, 200/2);
            sitting2++;
        }
      
      if (sitting2 == 30){    
            sitting2 = 1;
        }
      
     
      if (mouseX == pmouseX && mouseY == pmouseY){
          moved = false;
      }
      
      image(middleSit, 720, 480, 100/2, 200/2);
      
      
      
      //misc
      image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
      image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
     
  }
  
  else if (screen==3) {
      noCursor();
     
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
      
    image(wedgeOn, width/2, height/2, canvasWidth, canvasHeight);
     
     if(axeClicked == true){
      image(axeOff, width/2, height/2, canvasWidth, canvasHeight);
     } else {
      image(axeOn, width/2, height/2, canvasWidth, canvasHeight);
     }
     
     if(knifeClicked == true){
      image(knifeOff, width/2, height/2, canvasWidth, canvasHeight);
     } else {
      image(knifeOn, width/2, height/2, canvasWidth, canvasHeight);
     }
     
    image(hand, mouseX+45, mouseY+37, canvasHeight/5, 700/5);
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
      
        if(mouseX > 450 && mouseX < 560 && mouseY > 200 && mouseY < 400 && allToolClicked == 2){
            image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
            image(wedgeOn, width/2, height/2, canvasWidth+10, canvasHeight+10);
            if(axeClicked == true){
              image(axeOff, width/2, height/2, canvasWidth, canvasHeight);
             } else {
              image(axeOn, width/2, height/2, canvasWidth, canvasHeight);
             }
            if(knifeClicked == true){
              image(knifeOff, width/2, height/2, canvasWidth, canvasHeight);
             } else {
              image(knifeOn, width/2, height/2, canvasWidth, canvasHeight);
             }
            image(handpoint, mouseX+45, mouseY+41, canvasHeight/5, 700/5);
            image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
        }
      
         if(mouseX > 200 && mouseX < 325 && mouseY > 150 && mouseY < 450){
          image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
          image(wedgeOn, width/2, height/2, canvasWidth, canvasHeight);
          //image(knifeOn, width/2, height/2, canvasWidth, canvasHeight);
    
          if(axeClicked == true){
              image(axeOff, width/2, height/2, canvasWidth, canvasHeight);
             } else {
              image(axeOn, width/2, height/2, canvasWidth+10, canvasHeight+10);
             }
           if(knifeClicked == true){
              image(knifeOff, width/2, height/2, canvasWidth, canvasHeight);
             } else {
              image(knifeOn, width/2, height/2, canvasWidth, canvasHeight);
             }
          
              image(handpoint, mouseX+45, mouseY+41, canvasHeight/5, 700/5);
              image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
         }
     
         if(mouseX > 650 && mouseX < 800 && mouseY > 150 && mouseY < 450){
          image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
          image(wedgeOn, width/2, height/2, canvasWidth, canvasHeight);
          //image(axeOn, width/2, height/2, canvasWidth, canvasHeight);
    
          if(knifeClicked == true){
              image(knifeOff, width/2, height/2, canvasWidth, canvasHeight);
             } else {
              image(knifeOn, width/2, height/2, canvasWidth+10, canvasHeight+10);
             }
          if(axeClicked == true){
              image(axeOff, width/2, height/2, canvasWidth, canvasHeight);
             } else {
              image(axeOn, width/2, height/2, canvasWidth, canvasHeight);
             }
          
              image(handpoint, mouseX+45, mouseY+41, canvasHeight/5, 700/5);
              image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
         }
     
 }
  
  else if (screen==4) {
    frameRate(60);
     noCursor();
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    
    
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    
    image(wedgeOn, shapeX, shapeY, 780,450);
    if (grabbed == true){
        image(flashGreen, width/2, height/2, canvasWidth, canvasHeight);
       // tint(255, opacity);
      
        //  tint(255, 255);
        
        fill(72, 199, 197, opacity+30);
        rect(0, 0, canvasWidth, canvasHeight);
        image(wedgeOn, shapeX, shapeY, 780,450);
        image(longArmGrab, mouseX-860, mouseY, 5444/3, 360/3);
        image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
        image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
      
        
        
    } else{
        image(longArm, mouseX-860, mouseY, 5444/3, 360/3)
    }
    image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
      
    if (grabbed == true && mouseX < 400 && mouseY >100){
            screen = 5;
            Screen4sound.stop();
            click.play();
            Screen5sound.play();
            
            shapeX = 800;
            shapeY = 250;
            frameRate(10);

     }
      
  }
  
  else if (screen==5) {
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
      
     
    if (flash == 1){
        image(flashGreen, width/2, height/2, canvasWidth, canvasHeight);
        flash++;
    }else if(flash == 2){
        image(flashOrange, width/2, height/2, canvasWidth, canvasHeight);
        flash++;
    }else if (flash == 3){
        image(flashPurple, width/2, height/2, canvasWidth, canvasHeight);
        flash++;
    } else if (flash == 4){
        image(flashWhite, width/2, height/2, canvasWidth, canvasHeight); 
        flash++;
    } else if (flash == 5) {
        flash = 1;
    }
    
    if(flashTimeout == 17){
        screen = 6;
        flashTimeout = 0;
        frameRate(60);
        Screen6sound.play();
    } else {
        flashTimeout++;
    }
  }
    
  else if (screen==6) {
      cursor();
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight)
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    
  //  image(thumbUnclicked, width/2, height/2, canvasWidth, canvasHeight);
    
    if(thumbClicked == 0){
        image(thumbUnclicked, width/2, height/2, canvasWidth, canvasHeight);
    } else if(thumbClicked == 1){
        image(thumbClicked1, width/2, height/2, canvasWidth, canvasHeight);
    } else if (thumbClicked == 2){
        image(thumbClicked2, width/2, height/2, canvasWidth, canvasHeight);
    } else if (thumbClicked == 3){
        image(thumbClicked3, width/2, height/2, canvasWidth, canvasHeight);
    } else if (thumbClicked == 4){
        screen = 7;
        fadeIn = 0;
        thumbClicked = 0;
        Screen6sound.stop();
        Screen7sound.play();
        
    }
    
    if(thumbClicked == 0 && mouseX > 450 && mouseX < 500 && mouseY > 270 && mouseY < 350){
        image(thumbUnclicked, width/2, height/2, canvasWidth+10, canvasHeight+10);
    } else if(thumbClicked == 1 && mouseX > 450 && mouseX < 500 && mouseY > 270 && mouseY < 350){
        image(thumbClicked1, width/2, height/2, canvasWidth+10, canvasHeight+10);
    } else if (thumbClicked == 2 && mouseX > 450 && mouseX < 500 && mouseY > 270 && mouseY < 350){
        image(thumbClicked2, width/2, height/2, canvasWidth+10, canvasHeight+10);
    } else if (thumbClicked == 3 && mouseX > 450 && mouseX < 500 && mouseY > 270 && mouseY < 350){
        image(thumbClicked3, width/2, height/2, canvasWidth+10, canvasHeight+10);
    } 
    image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight)
  }
    
  else if (screen==7) {
        textSize(30);
    textAlign(CENTER);
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    //image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    fill(255);
      
    if(fadeIn < 255){
            fill(255,255,255, fadeIn);
            text("The old people knew you had a splinter, they said...", width/2, height/2);
            fadeIn = fadeIn + 10;
          }else{
            fill(255);
            text("The old people knew you had a splinter, they said...", width/2, height/2);
          }
    
        
    if(showText7 == 175){
    textSize(35);
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    text(myTextAsLetters[floor(count)], x7, y7);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+150, y7);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+300, y7);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+450, y7);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+600, y7);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+750, y7);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+900, y7);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+1050, y7);
    count = count+0.003;
    
    text(myTextAsLetters[floor(count)], x7, y7+100);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+150, y7+100);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+300, y7+100);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+450, y7+100);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+600, y7+100);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+750, y7+100);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+900, y7+100);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+1050, y7+100);
    count = count+0.003;
         
    text(myTextAsLetters[floor(count)], x7, y7+200);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+150, y7+200);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+300, y7+200);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+450, y7+200);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+600, y7+200);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+750, y7+200);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+900, y7+200);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+1050, y7+200);
    count = count+0.003;
    
    text(myTextAsLetters[floor(count)], x7, y7+300);
    count = count+0.003;
    fill(255, 172, 148);
    text(myTextAsLetters[floor(count)], x7+150, y7+300);
    count = count+0.003;
    fill(255);
    text(myTextAsLetters[floor(count)], x7+300, y7+300);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+450, y7+300);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+600, y7+300);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+750, y7+300);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+900, y7+300);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+1050, y7+300);
    count = count+0.003;
    
    text(myTextAsLetters[floor(count)], x7, y7+400);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+150, y7+400);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+300, y7+400);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+450, y7+400);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+600, y7+400);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+750, y7+400);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+900, y7+400);
    count = count+0.003;
    text(myTextAsLetters[floor(count)], x7+1050, y7+400);
    count = count+0.003;
    } else{
        showText7++;
         image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    }
   
         
    

         
    if(floor(count) == myTextAsLetters.length){
        count = 0;
    }
    
    
  } 
    
  else if (screen==8){
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
        //2732 × 2062
      
      
          image(face, width/2 -5, y+20, canvasWidth, 2062/3);
    
     
      ellipse(380, y, 83)
      image(leftEye, 378, y, 285/2.5, 270/2.5);
      ellipse(580, y, 83)
      image(rightEye, 582, y, 285/2.5, 270/2.5);
    
   // image(thumbClicked3, width/2, height/2, canvasWidth, canvasHeight);
    strokeWeight(0);
      
       e1 = new Eye(380, y, 83);
      e2 = new Eye(580, y, 83);
     //e3 = new Eye(420, 230, 220);
      
    e1.update(mouseX, mouseY);
    e2.update(mouseX, mouseY);
   // e3.update(mouseX, mouseY);
    e1.display();
    e2.display();
   // e3.display();
      
       
    if (eyeLeft >= 140 && eyeLeft < 145){
            
            
            image(leftShutMid, 377, y, 285/2.5, 270/2.5);
            eyeLeft++;
        }else if(eyeLeft >= 145 && eyeLeft < 150){
            image(leftShutFull, 377, y, 285/2.5, 270/2.5);
            eyeLeft++;
        }else if (eyeLeft >= 150 && eyeLeft < 155){    
           image(leftShutMid, 377, y, 285/2.5, 270/2.5);
            eyeLeft++;
        }else if (eyeLeft >= 155){    
           eyeLeft = 1;
           
        } else{
            eyeLeft++;
        }
      
      if (eyeRight >= 140 && eyeRight < 145){
            image(rightShutMid, 584, y, 285/2.5, 270/2.5);
            image(faceBlink, width/2 -5, y+20, canvasWidth, 2062/3);
            eyeRight++;
        }else if(eyeRight >= 145 && eyeRight < 150){
            image(rightShutFull, 584, y, 285/2.5, 270/2.5);
            image(faceBlink, width/2 -5, y+20, canvasWidth, 2062/3);
            eyeRight++;
        }else if (eyeRight >= 150 && eyeRight < 155){    
           image(rightShutMid, 584, y, 285/2.5, 270/2.5);
            image(faceBlink, width/2 -5, y+20, canvasWidth, 2062/3);
            eyeRight++;
        }else if (eyeRight >= 155){    
           eyeRight = 1;
        } else{
            eyeRight++;
        }
     
  image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
      
      if(y > 154){
           y = y - 2
      }
      if(faceRise < 250){
      faceRise++;
      }
  }

  else if (screen==9){
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    image(tree9, width/2, height/2, canvasWidth, canvasHeight);
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    if (moved == true){
          if (walk < 10){
            image(walk1, mouseX, 470, 100/1.5, 160/1.5);
            image(walk2, mouseX + 50, 470, 100/1.5, 160/1.5);
            image(walk3, mouseX - 45, 470, 100/1.5, 160/1.5);
            walk++;
        }else if(walk >= 10 && walk < 20){
            image(walk2, mouseX, 470, 100/1.5, 160/1.5);
            image(walk3, mouseX + 50, 470, 100/1.5, 160/1.5);
            image(walk2, mouseX - 45, 470, 100/1.5, 160/1.5);
            walk++;
        }else if (walk >= 20 && walk < 30){
            image(walk3, mouseX, 470, 100/1.5, 160/1.5);
            image(walk2, mouseX + 50, 470, 100/1.5, 160/1.5);
            image(walk1, mouseX - 45, 470, 100/1.5, 160/1.5);
            walk++;
        } else if (walk >= 30 && walk < 40){
            image(walk2, mouseX, 470, 100/1.5, 160/1.5);
            image(walk1, mouseX + 50, 470, 100/1.5, 160/1.5);
            image(walk2, mouseX - 45, 470, 100/1.5, 160/1.5);
            walk++;
        }
          
        if (walk == 40){
            walk = 1;
        }
      } else if (moved == false){
          image(still, mouseX, 470, 100/1.5, 160/1.5);
          image(still, mouseX+50, 470, 100/1.5, 160/1.5);
          image(still, mouseX-45, 470, 100/1.5, 160/1.5);
      }
      
    image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
      
    if (mouseX == pmouseX && mouseY == pmouseY){
          moved = false;
      }
      
}
    
  else if (screen==10){
      noCursor();
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    //image(leaf, width/2, height/2, canvasWidth, canvasHeight); 
      
    if (grabbed == true){
        bugShadow = false;
        
    }    
    if (bugShadow == true){
         image(leafShadow, width/2, height/2, canvasWidth, canvasHeight); 
    } else if (bugShadow == false){
        image(leaf, width/2, height/2, canvasWidth, canvasHeight); 
        image(thumbClicked3, width/2-200, y, canvasWidth, canvasHeight);
        
        if(y > 270){
        y = y - 3;
        }
    }

    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
      
      if (beetleMove < 15){
            image(smallBeetle1, shapeX2, shapeY2, 315/2.3, 290/2.3);
            beetleMove++;
        }else if(beetleMove >= 15 && beetleMove < 30){
            image(smallBeetle2, shapeX2, shapeY2, 315/2.3, 290/2.3);
            beetleMove++;
        }
      if (beetleMove == 30){    
            beetleMove = 1;
        }
    if(grabbed == false){
        image(handFlipped, mouseX, mouseY, canvasHeight/5, 700/5);
        //Screen11sound.stop();
    }else if (grabbed == true){
        image(handFlippedGrab, mouseX, mouseY, canvasHeight/5, 700/5);   
    }
      
      if (grabbed == true && mouseY < 390 && mouseY > 305 && mouseX > 240 && mouseX < 310){
            click.play();
            Screen10Asound.stop();
            Screen11sound.play();
            x = 0;
            screen = 11;
      }
    image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
}
    
  else if (screen==11){
      cursor();
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
     //image(thumbClicked3, x+280, height/2, canvasWidth, canvasHeight);
    image(leaf, xLeaf+280+201.13, height/2, canvasWidth, canvasHeight); 
      
      if(bugChewing < 200){
           bugChewing++;
           if (sitting < 15){
                image(bugThumb1, x+280, height/2, canvasWidth, canvasHeight);
                sitting++;
            }else if(sitting >= 15 && sitting < 30){
                image(bugThumb2, x+280, height/2, canvasWidth, canvasHeight);
                sitting++;
            }
          if (sitting == 30){    
                sitting = 1;
            }

            if(x < 200){
            x = x +6;
            }
          if(xLeaf < 400){
            xLeaf = xLeaf +6;
            }
      } else {
          if(mouseY < 330 && mouseY > 290 && mouseX > 450 && mouseX < 520){
              image(bugThumb3, x+280, height/2, canvasWidth, canvasHeight);
              image(splinter, x+280 +4, height/2-4, canvasWidth+100, canvasHeight+100);
          } else {
              image(bugThumb3, x+280, height/2, canvasWidth, canvasHeight);
              image(splinter, x+280, height/2, canvasWidth, canvasHeight);
          }
      }
   
      
      //image(thumbClicked3, width/2, height/2, canvasWidth, canvasHeight);
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
 }
  
  else if (screen==12){
    noCursor();
    //image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    //image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
      //image(leaf, xLeaf2+280+201.13, height/2, canvasWidth, canvasHeight);
      //  image(thumbWithBug, x2+280, height/2, canvasWidth, canvasHeight);
     
      if(xLeaf2 > 1){
            xLeaf2 = xLeaf2 - 4;
            }
      if(x2 > 1){
            x2 = x2 - 4;
            }
      
      
       if (grabbed == true){
        bugChange = true;
        
    }
      if (bugChange == true){
          
          image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
          image(leaf, xLeaf2+280+201.13, height/2, canvasWidth, canvasHeight);
          image(thumbNoBug, x2+280, height/2, canvasWidth, canvasHeight);
          image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
          if (beetleMove < 15){
            image(smallBeetle1, shapeX3, shapeY3, 315/2.3, 290/2.3);
            beetleMove++;
        }else if(beetleMove >= 15 && beetleMove < 30){
            image(smallBeetle2, shapeX3, shapeY3, 315/2.3, 290/2.3);
            beetleMove++;
        }
      if (beetleMove == 30){    
            beetleMove = 1;
        }
    } else if (bugChange == false){
          image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
          image(leaf, xLeaf2+280+201.13, height/2, canvasWidth, canvasHeight);
          image(thumbWithBug, x2+280, height/2, canvasWidth, canvasHeight);
          image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
        
        if(y > 270){
        y = y - 3;
        }
    }
       if(grabbed == false){
        image(handFlipped, mouseX, mouseY, canvasHeight/5, 700/5);
        //Screen11sound.stop();
    }else if (grabbed == true){
        image(handFlippedGrab, mouseX, mouseY, canvasHeight/5, 700/5);   
    }
      
       if (grabbed == true && mouseX > 700 && mouseX < 825 && mouseY > 100 && mouseY < 200){
            click.play();
            screen = 13;
           Screen13sound.play(); 
           Screen12sound.stop();
          bgNoiseOn = true;
      }
     image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
}
    
  else if (screen==13){
      cursor();
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
    
      
      if (x3 > -550){
          image(treeSmall, width/2, height/2, canvasWidth, canvasHeight);
     }
      if (x3 > -550){
      if (walk < 10){
            image(walk1F, width/2 + x3, 470, 100/1.5, 160/1.5);
            image(walk2F, width/2 + x3 + 50, 470, 100/1.5, 160/1.5);
            image(walk3F, width/2 + x3 - 45, 470, 100/1.5, 160/1.5);
            walk++;
        }else if(walk >= 10 && walk < 20){
            image(walk2F, width/2 + x3, 470, 100/1.5, 160/1.5);
            image(walk3F, width/2 + x3 + 50, 470, 100/1.5, 160/1.5);
            image(walk2F, width/2 + x3 - 45, 470, 100/1.5, 160/1.5);
            walk++;
        }else if (walk >= 20 && walk < 30){
            image(walk3F, width/2 + x3, 470, 100/1.5, 160/1.5);
            image(walk2F, width/2 + x3 + 50, 470, 100/1.5, 160/1.5);
            image(walk1F, width/2 + x3 - 45, 470, 100/1.5, 160/1.5);
            walk++;
        } else if (walk >= 30 && walk < 40){
            image(walk2F, width/2 + x3, 470, 100/1.5, 160/1.5);
            image(walk1F, width/2 + x3 + 50, 470, 100/1.5, 160/1.5);
            image(walk2F, width/2 + x3 - 45, 470, 100/1.5, 160/1.5);
            walk++;
        }
           x3 = x3 - 2;
      }
     
      if(x3 == -550){
          if (bgNoiseOn == true){
              bgNoise.play();
              bgNoiseOn = false;
          }
          if(treeGrow < 100){
              image(treeMed, width/2, height/2, canvasWidth, canvasHeight);
          } else if (treeGrow >= 100){
              image(treeBig, width/2, height/2, canvasWidth, canvasHeight);
          }
          treeGrow++
      }
      
     
          
        if (walk == 40){
            walk = 1;
        }
       image(whiteboarder,width/2, height/2, canvasWidth, canvasHeight);
 
}
    
  else if (screen==14){
      cursor();
    image(bgImage, width/2, height/2, canvasWidth, canvasHeight);
    image(arrow, arrowX, arrowY, arrowWidth, arrowHeight);
     textAlign(CENTER); 
             textSize(25);
    if(fadeInTimer < 500){
          if(fadeIn < 255){
            fill(255,255,255, fadeIn);
            text("“We cultivated our land, but in a way different from the white \n man. We endeavoured to live with the land; they seemed to live \n off it. I was taught to preserve, never to destroy.” \n – Tom Dystra", width/2,height/2-30);
            fadeIn = fadeIn + 10;
          }else{
            fill(255);
            text("“We cultivated our land, but in a way different from the white \n man. We endeavoured to live with the land; they seemed to live \n off it. I was taught to preserve, never to destroy.” \n – Tom Dystra", width/2,height/2-30);
          }
          fadeInTimer++;
      }
       
      if(fadeOutTimer == 500){
          if(fadeOut > 1){
           fill(255,255,255, fadeOut);
           text("“We cultivated our land, but in a way different from the white \n man. We endeavoured to live with the land; they seemed to live \n off it. I was taught to preserve, never to destroy.” \n – Tom Dystra", width/2,height/2-30);
           fadeOut = fadeOut - 10;
          }
      }else{
          fadeOutTimer++;
      }
      
      if(fadeOut == -5){
          image(restart, width/2, height/2, canvasWidth, canvasHeight);
      }
    
}

}

    function mousePressed () {
      
     if (screen==1){
      if (mouseX < 300 && mouseX > 200 && mouseY < 350 && mouseY > 200) {
          click.play();
          screen = 1.5;
         fadeOut = 255;
          textSize(25);
          fadeIn = 0;
          fadeInTimer = 0;
          fadeOutTimer = 0;
          
      }
         
         
     } else if (screen== 1.5){
           let p = dist(mouseX, mouseY,70,60);
         if(p < 50) {
          click.play();
          screen = 2;
          bgNoise.stop();
          Screen2sound.play();
          textSize(30);
          fadeIn = 0;
          fadeOut = 255;
          fadeInTimer = 0;
          fadeOutTimer = 0;
            
        }
     } 
        
     else if (screen==2){
        let d = dist(mouseX, mouseY, 780, 480);
        let p = dist(mouseX, mouseY,70,60);
        if (d < 150) {
          click.play();
          screen = 3;
          Screen2sound.stop();
          Screen3sound.play();
          fadeIn = 0;
          fadeOut = 255;
          fadeInTimer = 0;
          fadeOutTimer = 0;
        } else if(p < 50) {
          click.play();
          screen = 1;
          Screen2sound.stop();
          textSize(35);
          fadeIn = 0;
          fadeOut = 255;
          fadeInTimer = 0;
          fadeOutTimer = 0;
            
        }
      
         
     } 
        
     else if (screen==3){
        //let d = dist(mouseX, mouseY, width/2, height/2);
        let p = dist(mouseX, mouseY,70,60);
        if (mouseX > 450 && mouseX < 560 && mouseY > 200 && mouseY < 400 && allToolClicked == 2) {
          click.play();
          screen = 4;
          Screen3sound.stop();
          Screen4sound.play();
          axeClicked = false;
          knifeClicked = false;
          allToolClicked = 0;
          shapeX = 800;
          shapeY = 250;
          
          
        }else if(p < 50) {
          click.play();
          screen = 2;
          Screen3sound.stop();
          Screen2sound.play(); 
          axeClicked = false;
          knifeClicked = false;
          allToolClicked = 0;
          fadeIn = 0;
          fadeOut = 255;
          fadeInTimer = 0;
          fadeOutTimer = 0;
        } else if(mouseX > 200 && mouseX < 325 && mouseY > 150 && mouseY < 450 && allToolClicked < 2 && axeClicked == false){
          click.play();
          axeClicked = true;
          allToolClicked++;
        } else if(mouseX > 650 && mouseX < 800 && mouseY > 150 && mouseY < 450 && allToolClicked < 2 && knifeClicked == false) {
          click.play();
          knifeClicked = true;
          allToolClicked++;
        }
     
     
     } 
    
     else if (screen==4){
        grabbed = true;
        let p = dist(mouseX, mouseY,70,60);
        let m = dist(mouseX, mouseY, shapeX, shapeY);
         if(p < 50) {
          click.play();
             
          screen = 3;
          Screen4sound.stop();
          Screen3sound.play();
          shapeX = 800;
          shapeY = 250;
        } else if (m < radius){
            click.play();
            grabbed = true;
        } else{
            grabbed = false;
        }
        
          
        
    } 
     
     else if (screen==5){
        let p = dist(mouseX, mouseY,70,60);
        if(p < 50) {
          click.play();
          screen = 4;
          Screen5sound.stop();
          Screen4sound.play();
          shapeX = 800;
          shapeY = 250;
          frameRate(60);
        }
      }
        
     else if (screen==6){
    
        let p = dist(mouseX, mouseY,70,60);
        if (mouseX > 450 && mouseX < 500 && mouseY > 270 && mouseY < 350 ) {
          click.play();
          thumbClicked++;
          Screen5sound.stop();
          frameRate(60);
        }else if(p < 50) {
          click.play();
          screen = 4;
          Screen6sound.stop();
          Screen4sound.play();
          shapeX = 800;
          shapeY = 250;
          frameRate(60);
          thumbClicked = 0;
        }
      } 
        
     else if (screen==7){
         let p = dist(mouseX, mouseY,70,60);
        if (showText7 == 175 && mouseX > 180 && mouseX < 320 && mouseY > 350 && mouseY < 410) {
          click.play();
          showText7 = 0
          screen = 8;
          Screen7sound.stop();
          Screen8sound.play();

        }else if(p < 50) {
          click.play();
          screen = 6;
          Screen7sound.stop();
          Screen6sound.play();
          shapeX = 800;
          shapeY = 250;
          frameRate(60);
          thumbClicked = 0;
          showText7 = 0
        }
      }
        
     else if (screen==8){
    
        let p = dist(mouseX, mouseY,70,60);
        if(p < 50) {
          click.play();
          fadeIn = 0;
          screen = 7;
          Screen8sound.stop();
          Screen7sound.play();
          faceRise = 0
          frameRate(60);
          y = height;
        }
        if (faceRise == 250) {
          click.play();
          faceRise = 0
          screen = 9;
          Screen8sound.stop();
          Screen9sound.play();

        }
      } 
        
     else if (screen==9){
    
        let p = dist(mouseX, mouseY,70,60);
        if(p < 50) {
          click.play();
          screen = 8;
          Screen9sound.stop();
          Screen8sound.play();
          faceRise = 0
          y = height;
        }
        if (mouseX > 600 && mouseX < 900 && mouseY > 300 && mouseY < 540) {
          click.play();
          faceRise = 0
          screen = 10;
          Screen9sound.stop();
          Screen10sound.play();
          y = height;
          bugShadow = true;
          shapeX2 = 755;
            shapeY2 = 163;

        }
      } 
    
     else if (screen==10){
          let p = dist(mouseX, mouseY,70,60);
         let m = dist(mouseX, mouseY, shapeX2, shapeY2);
        if(p < 50) {
          click.play();
          screen = 9;
          Screen10sound.stop();
          Screen9sound.play();
          bugShadow = true;
          y = height;
        }
        if (m < radius){
            click.play();
            grabbed = true; 
            Screen10Asound.stop();
             Screen10sound.stop();
            Screen10Asound.play();
        } else{
            grabbed = false;
           
        }
         
        
        } 
        
        else if (screen==11){
          let p = dist(mouseX, mouseY,70,60);
        if(p < 50) {
          click.play();
          screen = 10;
          Screen10Asound.stop();
          Screen10sound.play();
          shapeX2 = 755;
          shapeY2 = 163;
           y = height;
           x = 0;
           xLeaf = 0;
           grabbed = false;
          bugShadow = true;
            bugChewing = 0;
        }
         if(bugChewing == 200 && mouseY < 330 && mouseY > 290 && mouseX > 450 && mouseX < 520){
          click.play();
          faceRise = 0
          screen = 12;
          Screen11sound.stop();
          Screen12sound.play();
           x2 = 201.13;
          xLeaf2 = 401.44;
          shapeX3 = 270;
            shapeY3 = 410;

        }
          
      }
        
        else if (screen==12){
          let p = dist(mouseX, mouseY,70,60);
          let m = dist(mouseX, mouseY, shapeX3, shapeY3);
        if(p < 50) {
          click.play();
          screen = 11;
          Screen12sound.stop();
          Screen11sound.play();
          bugChewing = 0;
          x = 0;
          xLeaf = 0;
          x2 = 201.13;
          xLeaf2 = 401.44;
          bugChange = false;
        }
        if (m < radius){
            click.play();
            grabbed = true;
        }
          
      }
        else if (screen==13){
          let p = dist(mouseX, mouseY,70,60);
        if(p < 50) {
          click.play();
          x = 0;
          screen = 12;
          Screen13sound.stop();
          Screen12sound.play();
           shapeX3 = 270;
            shapeY3 = 430;
         bugChewing = 0;
          x = 0;
          xLeaf = 0;
          x2 = 201.13;
          xLeaf2 = 401.44;
          bugChange = false;
         x3 = 0;
         treeGrow = 0;
            bgNoiseOn = true;
            bgNoise.stop();
        }
        if (treeGrow > 200) {
          click.play();
          screen = 14;
            treeGrow = 0;
            x3 = 0;
          fadeIn = 0;
          fadeOut = 255;
          fadeInTimer = 0;
          fadeOutTimer = 0;

        }
          
      }
        
        else if (screen==14){
          let p = dist(mouseX, mouseY,70,60);
        if(p < 50) {
          click.play();
          screen = 13;
          Screen13sound.play();
        treeGrow = 0;
            x3 = 0;
        fadeIn = 0;
          fadeOut = 255;
          fadeInTimer = 0;
          fadeOutTimer = 0;
             bgNoiseOn = true;
            bgNoise.stop();
        }
        if ( fadeOut == -5 && mouseX > 410 && mouseX < 550 && mouseY > 215 && mouseY < 340) {
          click.play();
          screen = 1;
            fadeIn = 0;
          fadeOut = 255;
          fadeInTimer = 0;
          fadeOutTimer = 0;
            treeGrow = 0;
            x3 = 0;
            bgNoise.stop();
            bgNoiseOn = true;

        }
          
      }
        
        
    }

function mouseReleased() {
    grabbed = false;
}

function mouseDragged(){
    if(grabbed){
        shapeX = mouseX;
        shapeY = mouseY;
        shapeX2 = mouseX;
        shapeY2 = mouseY;
        shapeX3 = mouseX;
        shapeY3 = mouseY;
    }

}


function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;

this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
};

this.display = function() {
    
    push();
    translate(this.x, this.y);
    fill(255);
    //ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    //fill(153, 204, 0);
    image(pupil,this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
   
};
    
}

function canvasMouseMove() {
  // Map the mouse position to the number of images.
  opacity = Math.max( 0, map(mouseX, 0, 900, 0, 255 ));
}

function mouseMoved(){
    moved = true;
    
    
   
}

    
  
    


