const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const dueDateInput = document.getElementById('dueDate');
const priorityLow = document.getElementsByName('priorityLow');
const priorityMedium = document.getElementsByName('priorityMedium');
const priorityHigh = document.getElementsByName('priorityHigh');


addTaskButton.addEventListener('click', () => {
    const taskValue = taskInput.value.trim();
    const dueDateValue = dueDateInput.value;
    let priorityValue = "";

    if (!taskValue || !dueDateValue ) return;
    const existingTask =document.querySelectorAll('#taskList li span');
    for(let task of existingTask){
        if(task.textContent.includes(taskValue)){
            alert("Task already exists!");
            taskInput.value="";
            dueDateInput.value="";
            return;
        }
    }
   
    const listItem = document.createElement('li');
    listItem.className =
        "flex items-center justify-between bg-white p-3 rounded shadow mb-2";
    const leftDiv = document.createElement('div');
    leftDiv.className = "flex items-center gap-3";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "w-5 h-5 accent-blue-500";

    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    taskText.className = "text-gray-800";

    const dueDateText = document.createElement('span');
    dueDateText.textContent = ` (Due: ${dueDateValue})`;
    dueDateText.className = "text-gray-500 ml-2";
    taskText.appendChild(dueDateText);

     const priorityText = document.createElement('span');
    if (document.getElementById('priorityLow').checked) {
        priorityValue = "Low";
        priorityText.textContent = `  ${priorityValue}`;
        priorityText.className = "text-gray-500 ml-2 bg-green-300 px-1 rounded";
    } else if (document.getElementById('priorityMedium').checked) {
        priorityValue = "Medium";
        priorityText.textContent = `  ${priorityValue}`;
        priorityText.className = "text-gray-500 ml-2 bg-yellow-300 px-1 rounded";
    } else if (document.getElementById('priorityHigh').checked) {
        priorityValue = "High";
        priorityText.textContent = `  ${priorityValue}`;
        priorityText.className = "text-gray-500 ml-2 bg-red-300 px-1 rounded";
    }
    
   
    checkbox.addEventListener('change', () => {
        taskText.classList.toggle("line-through");
        taskText.classList.toggle("text-red-500");
    });

 
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "✕";
    deleteBtn.className =
        "text-red-500 hover:text-red-700 font-bold";

    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    });

    // append
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(taskText);
    taskText.appendChild(priorityText);
    listItem.appendChild(leftDiv);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = "";
    dueDateInput.value = "";
   
});


