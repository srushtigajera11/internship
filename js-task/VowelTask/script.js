const n = document.getElementById("name");
const char = document.getElementById("char");
const check = document.getElementById("Check");
const cancel = document.getElementById("Cancel");
const task = document.getElementById("task");

check.addEventListener("click",()=>{
    if(n.value == "" || char.value=== ""){
        task.style.backgroundColor ="red"
        task.style.color = "white"
        task.innerText =" Please fill the fields"
    }
    else if(char.value == 'a' || char.value == 'u'  || char.value == "o" || char.value == "A"){
        task.style.backgroundColor ="coral"
        task.style.color = "white"
        task.innerText =n.value + " the entered character is a Vowel"
    }else{
        task.style.backgroundColor ="lightgreen"
        task.style.color = "white"
        task.innerText =n.value +"  the entered character is a Consonant"
    }
})

cancel.addEventListener("click",()=>{
    n.value = "";
    char.value = "";
});