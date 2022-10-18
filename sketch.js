function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill()
for(var j=-1;j<int(height/50);j++)
  {
  for(var i=-1;i<int(width/50);i++)
    {
      stroke("#6c584c")
      strokeWeight(2.5)
      rectMode(CENTER)
      ellipse(50+(i*100),50+(j*100),100+mouseX/20)
      stroke("#f4acb7")
      strokeWeight(1)
      rect(25+(i*100),25+(j*100),50+mouseY/5)
      stroke("#d8e2dc")
      strokeWeight(1)
      ellipse(75+(i*100),50+(j*100),50+mouseX/10)  
    }
  }
}
