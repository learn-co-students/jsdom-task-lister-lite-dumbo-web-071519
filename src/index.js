const form = document.querySelector("#create-task-form");
const textArea = form.querySelector("#new-task-description");
const list = document.querySelector("#tasks");
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener("submit", addTask)
  list.addEventListener("click", buttonAction)
});

function addTask(event){
  event.preventDefault();
  const li = document.createElement('li');
  li.innerHTML = `${textArea.value} <button class='delete-btn'>Delete</button>`
  list.appendChild(li);
}

function buttonAction(event){
  if(event.target.innerText === "Delete"){
    event.target.parentElement.remove()
  }
  if(event.target.innerText === "Edit")
   editTask(event.target)
}

function editTask(){
  
}