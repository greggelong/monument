let yuan; // woman
let david; // man
let leftblock; // left block
let rightblock; // right block
//let sky;
//let cctv;
let playing = false;
let angle = 0;
let goal = 180;
let cnv;
let lasttouch= 0;
let sRh = 252
let sRw =100
let sLh =220
let sLw =109
let dw =81
let dh =255
let yw =78
let yh = 264
function preload() {
  yuan = loadImage("yuanm.png");
  david = loadImage("davidm.png");
  leftblock = loadImage("stoneLeft.png");
  rightblock = loadImage("stoneRight.png");
  sky = loadImage("skyOldL7s.png");
  //sky = loadImage("skyStar1whites.png");
  cctv = loadImage("cctvL7s.png")
   
}

function setup() {
  // put setup code here
  pixelDensity(1);
  cnv = createCanvas(600, 600);
  let cx = floor((windowWidth - cnv.width) / 2);
  let cy = floor((windowHeight - cnv.height) / 2);
  cnv.position(cx, cy);
  background(0);
  angleMode(DEGREES);
  imageMode(CENTER);
  sky.resize(700,0)
  cctv.resize(400,0)
  
  
}

function touchStarted() {
  // for Ios
  // calculate time since last touch
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  print(playing);
  if (timesincelasttouch > 500) {
    if (!playing) {
      ss.play(); // hiss when you start
      hs.play();
      hs.loop(); // keep playing hair dryer
      playing = true;
    } else if (playing) {
      hs.stop();
      ss.play(); // hiss when you stop
      playing = false;
    }
    // update
    lasttouch = currenttime;
  }
}

function mousePressed() {
  touchStarted();
}

function draw() {
  background(0);
  let dx = width/4
  let dy = height-dh/2
  let yx = width-width/4
  let yy = height-yh/2
  let mx = width/2
  let my = map(sin(frameCount/2),-1,1, 0,height/2,)
  let off= 40
  // sky
  let sx =width/2
  let sy =height/2-70
  push()
  translate(sx,sy)
  rotate(frameCount/10)
  tint(255,255)
  image(sky,0,0)
  pop()

  fill(230)
  //moon
  strokeWeight(1)
  noStroke()
  //ellipse(mx,my,60,60)
  
  fill(90)
  rect(0,height-height/4,width,height/4)
  
  strokeWeight(4)
  stroke(255)
  //line(dx+18,dy-30,mx,my)
  //line(yy-5,yy-73,mx,my)
  let trans = map(sin(frameCount/5),-1,1,0,255)

  tint(255,trans)
  image(rightblock,dx,dy,dw*.6,dh*.6)
  image(leftblock,yx,yy,yw*.6,yh*.6)

   
  image(leftblock,width/2,height-yh/2-off,sLw*.5,yh*.5)

  image(rightblock,width/2+50,height-sLh/2+30,sLw*.6,sLh*.6)

  tint(255,255-trans)
  image(cctv,200,250)
  
}
