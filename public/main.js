const width = 400
const height = 400
let c
let step = 0
function setup() {
  c = createCanvas(width, height)
  createButton('save').mousePressed(() => {
    saveCanvas(c, `save_${Math.random()}`, 'jpg')
  })
  strokeWeight(0)
  frameRate(5)
}

const f = n => {
  if (n == 0) { return }

  line(0,0,10,10)
  f(n-1)
}

function draw() {
  step += 1
  mem = {}
  background(0)


  push()
  stroke(255,255,255,64)
  fill(255,255,255,64)
  strokeWeight(1)
  translate(width/2,height/2)
  scale(1)
  f(min(step,7))
  pop()
}
