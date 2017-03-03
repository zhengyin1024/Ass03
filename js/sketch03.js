// ***** Global variables ***** //
var myData = [12, 43, 15, 25, 34];
var labels = ['Colombia', 'Peru', 'Venezuela', 'Chile', 'Argentina'];

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 800);
  textAlign(LEFT, TOP);
  textSize(18);
  console.log('Setup complete...');
}

// ***** Draw function ***** //
function draw(){
  background(255);
  fill(color(0, 0, 255));
  // Drawing the bar chart
  for (var i = 0; i < myData.length; i++) {
    rect(100, 50 + 10*i, myData[i] * 10, 15);
  }
  // Drawing the labels
  for (var i = 0; i < labels.length; i++) {
    text(labels[i], 10, 20*i);
  }
}