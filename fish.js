//credit to chatGPT for helping me clarify the this.y,this.x, and how to use this.img, i laid out the skeleton for the class, but needed help figuring out how to make it actually connect without manually having something like img random(1-6) instead of having a fishimages section. Credit to it also for figuring out how to implement the negative scaling to flip the images, I knew i had to make it -1,1, but didn't realize it being contained in a push/pop could make it happen!

class Fish {
  constructor(x,y,img){
      this.x = x;
      this.y = y;
      this.img = img;
      this.speedX = random(5,8);
      this.speedY = random(3,5);
      this.fishWidth = 236;
      this.fishLength = 159
  }
  

  show() {
    imageMode(CENTER);
    push();
    if (this.speedX > 0) {
        scale(-1, 1); 
        image(this.img, -this.x, this.y);
    } else {
        image(this.img, this.x, this.y);
    }
    pop();
  }

  rollover(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.fishWidth/2 || d < this.fishLength/2) {
      return true;
    } else {
      return false;
    }
  }
  
  move() {

      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x >= width -20|| this.x <= -20) {
          this.speedX *= -1;}
        if (this.y >= height - 20|| this.y <= + 200) {
          this.speedY *= -1;}
        }

        
}