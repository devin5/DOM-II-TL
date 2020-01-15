// Your code goes here

window.addEventListener("load", e => alert("welcome"))

window.addEventListener("resize", e => alert("your connected to server"))

window.addEventListener("copy", e => alert("dont steal form me"))

window.addEventListener('keydown', e => keyDown.style.backgroundColor = "red")

let headerC = document.querySelector("header")
let anchors = document.querySelectorAll('nav a');
let mainheader = document.querySelector('header div h1');
let img1 = document.querySelector('.img-content');
let dragDrop = document.querySelector('.img-fluid');
let dblClick = document.querySelector('.btn')
let selection = document.querySelector(".text-content");


for( var i=0; i < mouseOver.length; i++){
    mouseOver[i].style.backgroundColor = "red"

  }

  img1.addEventListener('wheel', e => img1.style.transform = "skewY(30deg)")

  dragDrop.addEventListener('drag', e => dragDrop.style.border = "10px  solid black")

  dragDrop.addEventListener('mouseleave', e => dragDrop.style.border ="15px dashed blue")

  dblClick.addEventListener("dblclick", e => dblClick.style.backgroundColor = "red")

  selection.addEventListener("select", e => alert("you"))

  headerC.addEventListener('mouseover', e => {
    headerC.style.backgroundColor = "blue"
    event.stopPropagation();
  })

  mouseOver.forEach( (a) => {
    a.addEventListener('click', (event) => {
          event.preventDefault()
    })
})