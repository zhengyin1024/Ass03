// ***** Global variables ***** //
var victimTable;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 550;

// ***** Preload function ***** //
function preload(){
  victimTable = loadTable('../data/Ass3.csv', 'csv', 'header');
  console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
  createCanvas(800, 3000);
  textSize(12);
  console.log('Setup complete...');
  print(victimTable.getRowCount() + ' rows loaded...');
  print(victimTable.getColumnCount() + ' columns loaded...');
  for (var i = 0; i < victimTable.getRowCount(); i++) {
    maxTotal = max(victimTable.getNum(i, 'TOTAL'), maxTotal);
    maxLabel = max(victimTable.getString(i, 'ANIO OCURRENCIA').length, maxLabel);
  }
  print('Maximum TOTAL is ' + maxTotal);
  print('Maximum label length is ' + maxLabel);
}

// ***** Draw function ***** //
function draw(){
    background(255);
    fill(0);
    noStroke();
    textAlign(LEFT, TOP);
    for (var i = 0; i < victimTable.getRowCount(); i++) {
        var TOTAL = victimTable.getNum(i, 'TOTAL');
        var length = map(TOTAL, 0, maxTotal, 0, maxLength);
        rect(maxLabel * 5, 2 + 14*i, length, 12);
        text(nfc(TOTAL, 0), maxLabel * 5 + length + 5, 14*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < victimTable.getRowCount(); i++) {
        text(victimTable.getString(i, 'ANIO OCURRENCIA'), maxLabel * 5 - 5, 14*i);
    }
}