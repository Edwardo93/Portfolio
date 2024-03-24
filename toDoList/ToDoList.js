const addBtn = document.querySelector('#push')
const newTaskInput = document.querySelector('#newtask input')
const ul = document.querySelector('#tasks_todo')


addBtn.addEventListener('click', () =>{
    if(newTaskInput.value.length == 0){
        alert("Please enter a task")
    }
    else{
        // create new li with each valid entry in the input 
        const li = document.createElement("li");
        li.innerHTML = `${newTaskInput.value}`
        
        // Append trashcan btn to the li
        const delBtn = document.createElement("button");
        delBtn.classList.add("delete")
        delBtn.innerHTML = '<i class="fa-regular fa-trash-can" style="color: #5bc885;"></i>'

        li.appendChild(delBtn);
        ul.appendChild(li);

        newTaskInput.value = '';

        // Line-through li on click
        li.addEventListener("click", ()=>{
         li.classList.toggle("done")
        })
        // Delete task event
        delBtn.addEventListener("click", ()=>{
            ul.removeChild(li);
        })
    }
})