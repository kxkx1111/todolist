const form = document.querySelector(".input-box");

const tasks = document.querySelector(".tasks");

form.addEventListener("submit",addTask);

// add tasks

function addTask(e){
   e.preventDefault();
   let value = document.querySelector("#task").value;
   if(value) {
      let liTags = document.createElement("li");
      liTags.className = "task";
      liTags.innerHTML = `<span class="done">${value}</span><i class="bx bx-x remove"></i>`
      tasks.append(liTags);
      document.querySelector("#task").value = "";
   }
}

tasks.addEventListener("click",removeTasks);

// removeTasks

function removeTasks(e) {
   rem = e.target;
   if(rem.classList.contains("remove")){
      rem.parentElement.remove();
   }
   else if(rem.classList.contains("done")){
      rem.parentElement.style.backgroundColor = "orange";
      rem.style.textDecoration = "line-through";
   }
  
}
