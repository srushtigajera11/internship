const txtcity =document.getElementById("txtcity")
const btnadd = document.getElementById("btnadd")
const dcities = document.getElementById("dcities")
let cities = []
btnadd.addEventListener("click",()=>
{
    if(txtcity.value=="")
    {
        alert("please fill city")
        return
    }
    let cityname = txtcity.value
      if (cities.includes(cityname.toLowerCase())) {
        alert("City already added.");
        txtcity.value = "";
        txtcity.focus();
        return;
    }
   cities.push(cityname)

    dcities.innerHTML = ""
    for (let city of cities) {
        dcities.innerHTML += city + "<br>"
    }  
    txtcity.value = ""
    txtcity.focus()
})
