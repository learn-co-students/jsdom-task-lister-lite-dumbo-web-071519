document.addEventListener("DOMContentLoaded", () => {

});

let form = document.querySelector('form')
let list = document.querySelector('#list')

form.addEventListener('submit', event => {
  event.preventDefault()
  let input = form.querySelector("input").value
  if (input) {
    console.log(input)
    list.innerHTML += `<li>${input}<button>X</button></li>`
  }
})

list.addEventListener('click', event => {
  if (event.target.tagName = "BUTTON"){
    let remove = event.target.parentElement
    remove.remove()
  }
})
