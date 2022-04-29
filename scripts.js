window.onload = () => {
  addObservers()
}

const addObservers = () => {
  const options = document.querySelectorAll('option')
  options.forEach(option => option.addEventListener('change', onOptionChange))
  document.querySelector(".close-open").addEventListener("click", closeOpenFigure)
  document.querySelector(".on-off").addEventListener("click", moveFigure)
}

const onOptionChange = e => {

}

const closeOpenFigure = e => {

}

const moveFigure = e => {

}

//configuration stage area
const width = window.innerWidth
const height = window.innerHeight

const stage = new Konva.Stage({
  container: "Konva-container",
  width: width,
  height: height,
})

const layer = new Konva.Layer({
  draggable: false
}) //habilitar desabilitar move

stage.add(layer)