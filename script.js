let nextLetterTimeout;
let currentLetter = 'A';
let isRunning = false;
let lastUpdateTime = 0;
let letterColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER, CENTER);
  
  startButton = createButton('START');
  startButton.position(width/2 - 60, height/2 + 30);
  startButton.style('background-color', '#4CAF50');
  startButton.style('color', 'white');
  startButton.mousePressed(startSecventa);
  
  stopButton = createButton('STOP');
  stopButton.position(width/2 + 10, height/2 + 30);
  stopButton.style('background-color', '#f44336');
  stopButton.style('color', 'white');
  stopButton.mousePressed(stopSecventa);
  
  letterColor = randomColor();
}

function updateLetter() {
  if (currentLetter === 'Z') {
    currentLetter = 'A';
  } else {
    currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
  }
  letterColor = randomColor();
}


function startSecventa() {
  if (!isRunning) {
    isRunning = true;
    lastUpdateTime = millis();
  }
}

function stopSecventa() {
  isRunning = false;
}


function draw() {
  background(240);
  
  fill(letterColor);
  text(currentLetter, width/2, height/2 - 30);
  
  if (isRunning && millis() - lastUpdateTime > 500) {
    updateLetter();
    lastUpdateTime = millis();
  }
}


function randomColor() {
  return color(random(100, 255), random(100, 255), random(100, 255));
}