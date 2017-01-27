var bubbles = [];
var totalBubbles = 80;
var backgroundColor = '#FBE571';
var score = 0


function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(backgroundColor);

  for (var i = 0; i < totalBubbles;  i++) {
    bubbles.push({
      x: random(0, width),
      y: window.innerHeight + 200,
      diameter: random(40,120),
      speed: random(1, 5),
      offset: 0,
      textOpacity: 1
    });
  }
}

function  draw() {
  background(backgroundColor);
  textSize(24);
  fill('black')
  text('SCORE : ' + score , 100, 50)

  bubbles.forEach(function (bubble) {
    if ( bubble.popped) {
       textSize(24);
       textAlign(CENTER);
       fill('rgba(0,0,0, '+  bubble.textOpacity +')')
       text('**pop**', bubble.x, bubble.y - bubble.offset )
       if ( bubble.textOpacity >= 0.01) {
         bubble.textOpacity -= 0.01
       }
    }
    else {
      drawBubble( bubble );
    }
  })
}

function wasClickInsideBubble (bubble) {
  var bubbleRadius = bubble.diameter / 2;
  if (
    (mouseX > bubble.x - bubbleRadius ) &&
    (mouseX < bubble.x + bubbleRadius ) &&
    (mouseY > bubble.y - bubble.offset - bubbleRadius ) &&
    (mouseY < bubble.y - bubble.offset + bubbleRadius )
  ) {
    return  true
  } else {
    return false
  }
}

function mouseClicked() {
  bubbles.forEach(function (bubble) {
    if (wasClickInsideBubble(bubble)){
      console.log('aa');
      bubble.popped = true;
      score += 1

    }

  })
}

function drawBubble (bubble) {
  if ( bubble.offset > height + 400 ) {
    bubble.offset = 0
  }

  bubble.offset = bubble.offset + bubble.speed
  fill('lightblue')
  stroke('white')
  ellipse(bubble.x  ,bubble.y - bubble.offset , bubble.diameter,bubble.diameter)

  fill('white')
  ellipse( bubble.x  + ( bubble.diameter * 0.2 ), bubble.y - bubble.offset- ( bubble.diameter * 0.25),bubble.diameter/8,bubble.diameter/8)

  fill('lightblue')
  noStroke()
  ellipse(bubble.x + ( bubble.diameter * 0.15 ), bubble.y - bubble.offset - ( bubble.diameter * 0.2),bubble.diameter/8,bubble.diameter/8)

}
