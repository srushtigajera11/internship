console.log("Sdf")
const carname = document.getElementById("carname")
const company = document.getElementById("company")
const price = document.getElementById("price")
const tb = document.getElementById("tb")
const add = document.getElementById("add")
const table = document.getElementById("table")
let id = 0;
cars = [];
console.log("sdf")
add.addEventListener("click",()=>{
  
    // for(let i=0; i<cars.length; i++){
    let carobj = {
        id : id++ ,
        carname : carname.value,
        company : company.value,
        price: price.value
    }
    cars.push(carobj)
    console.log(cars)
tb.innerHTML=""
        cars.forEach(car => {                                
        tb.innerHTML +=
            "<tr><td>"+ car.id + "</td><td>" + car.carname + "</td><td>" +
            car.company + "</td><td>" +
            car.price + "</td></tr>";
        });
    carname.value =""
    company.value =""
    price.value=""
    carname.focus()

}
)
