document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskUl = document.getElementById("tasks");

  let submitform = document.getElementById("create-task-form");
  submitform.addEventListener("submit", function(event){
    event.preventDefault();
    let userInput = document.getElementById("new-task-description").value;
    let li = document.createElement('li');

    li.innerText = userInput;
    taskUl.appendChild(li);
    userInput = "";

    // console.log(userInput);
    taskUl.addEventListener("click", function(event){
        if event.target.name === "button"{
          taskUl

        }

    })

  })

  // taskTag.addEventListener("click", (e))
});
});
