const w = 5000

// Color Scheme (light, dark)
const colorSchemes = []
// Blue
colorSchemes[0] = ["#0fb4e1", "#07a0dc"]
// Red
colorSchemes[1] = ["#f54341", "#c81211"]
// Gold
colorSchemes[2] = ["#f0d588", "#e9cb82"]

function setup() {
  createCanvas(w, w, SVG)
  noStroke()
  colorScheme = random(colorSchemes)
  // colorScheme = colorSchemes[0]
}

function draw() {
  // save("mySVG.svg");
  // print("saved svg");
  // noLoop();
}