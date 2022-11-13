const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const p = document.querySelector('p')
let size = 36

const sizeUpHandler = () => {
  if(size < 60) {
    size += 5;
  }
  p.style.fontSize = `${size}px`
}

const sizeDownHandler = () => {
  if(size > 25) {
    size -= 5;
  }
  p.style.fontSize = `${size}px`
}

const randomColorNumber = () => {
  return Math.floor(Math.random() * 255)
}

const colorChangeHandler = () => {
  const red = randomColorNumber()
  const green = randomColorNumber()
  const blue = randomColorNumber()
  p.style.color = `rgb(${red},${green},${blue})`
}

sizeUp.addEventListener('click',sizeUpHandler)
sizeDown.addEventListener('click',sizeDownHandler)
color.addEventListener('click',colorChangeHandler)