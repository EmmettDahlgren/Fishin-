let fish = [];
let fishImages = [];
let state = 0;
let score = 0;

function preload() {
  sound1 = loadSound("clubPfishsong.wav");
  fishImages.push(loadImage("Images/fishred.png"));
  fishImages.push(loadImage("Images/fishorange.png"));
  fishImages.push(loadImage("Images/fishyellow.png"));
  fishImages.push(loadImage("Images/fishgreen.png"));
  fishImages.push(loadImage("Images/fishblue.png"));
  fishImages.push(loadImage("Images/fishpurple.png"));

  img7 = loadImage("Images/hook.png");
  img8 = loadImage("Images/LineHook.png");
  img9 = loadImage("Images/background.png")
  img10 = loadImage("Images/SkylineE.png")
}

function setup() {
  createCanvas(900, 700);
  noCursor();

  let fishWidth = 236;
  let fishHeight = 159;

  for (let i = 0; i < 10; i++) {
    let x = random(fishWidth, width - fishWidth);
    let y = random(fishHeight + 200, height - fishHeight);
    fish.push(new Fish(x, y, random(fishImages)));}

    startTime = millis();
}

function mousePressed(){
  for (let i = 0; i < fish.length; i++) {
    if (fish[i].rollover(450,mouseY)){
      fish.splice(i,1);
      score ++;
      }
   }
  }

  function keyPressed(){
    if (keyIsDown(UP_ARROW)){
      state = 1;
    }
    if (keyCode === ENTER){
      state = 1; 
    }
    if (keyCode === RETURN){
      state = 1; 
    }
    if (keyCode === 32){
      restartGame();
    }
  }

function draw(){
  if (state == 0) {
    draw1();
  } else if (state == 1){
    draw2();
  }
}

function draw1() {
  background(img10);
  textSize(60);
  textAlign(CENTER);
  fill(46, 139, 87);
  stroke(255);
  strokeWeight(4);
  text("Welcome to Scatterfish!", 450, 350);

  textSize(35);
  fill(32, 178, 170);
  text("[press enter to start]", 450, 450);
  text("Hurry to fishin' - The timer's already started!", 450, 550);
}



function draw2() {
  background(61, 193, 219);
  image(img9,width/2,height/2);
  Musicplay();

  let seconds = floor(millis() / 1000);
  text("Timer : " + seconds, 150, 150);

  textSize(30);
  if (score < 10) {
    text("Let's get started!",150,50);
  }
  else if (score < 30){
    text("Keep fishin!",150,50);
  }
  else if (score < 50){
    text("You're a Pro!",150,50);
  }
  else if (score < 100){
    text("Fishing Master!",150,50);
  }
  else if (score < 200){
    text("Fishing God!",150,50);
  }
  else {
    text("Supreme Fisher!",150,50);
  }
  text("Score : "+score,150,100);

  for (let i = 0 ; i < fish.length; i++) {
    fish[i].move();
    fish[i].show();
    fish[i].rollover(mouseX,mouseY);}

    if (fish.length < 5) {
      let x = random(236, width - 236);
      let y = random(159 + 200, height - 159); 
    fish.push(new Fish(x, y, random(fishImages)))
    fish.push(new Fish(x, y, random(fishImages)))
    fish.push(new Fish(x, y, random(fishImages)))
    fish.push(new Fish(x, y, random(fishImages)))
    fish.push(new Fish(x, y, random(fishImages)));
    }
    
  image(img8,width/2,mouseY-450);

  timer();
}

function timer() {
  let elapsedTime = millis() - startTime; 

  if (elapsedTime >= 60000) {
    end();
  }
}

function end() {
  background(0);  // Fill the background with black
  fill(255);  // White text color
  strokeWeight(0);
  textAlign(CENTER);
  textSize(48);
  text("Time is up!", width / 2, height / 2 - 50);
  textSize(32);
  text("Your score was: " + score, width / 2, height / 2 + 50);
  text("Refresh Page to restart your fishing experience!", width / 2, height / 2 + 100)
  text("See if you can beat your previous score!", width / 2, height / 2 + 150)
  noLoop();  // Stop the game loop
}

function Musicplay() {
  if (state === 1 && !sound1.isPlaying()) {
    sound1.play();
  }
}