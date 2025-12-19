const n = document.getElementById("name");
const age = document.getElementById("age");
const check = document.getElementById("Check");
const cancel = document.getElementById("Cancel");
const task = document.getElementById("task");
check.addEventListener("click",()=>{
    if(n.value === "" || age.value === ""){
        task.style.backgroundColor = "red";
        task.style.color = "white";
        task.innerText = "Please fill all the fields";
        
    }
    else if(age.value <= 0 || age.value >= 120){
        task.style.backgroundColor = "red";
        task.style.color = "white";
        task.innerText = "Enter vaild Age ";
    }
    else if(age.value < 60){
        task.style.backgroundColor = "coral";
        task.style.color = "white";
        task.innerText = n.value + ", you are not Senior citizen";
    }
    else
        {
          task.style.backgroundColor = "lightgreen";
          task.style.color = "white";
          task.innerText = n.value + ", You are a Senior Citizen"
    }
});

cancel.addEventListener("click",()=>{
    n.value = "";
    age.value = "";
});