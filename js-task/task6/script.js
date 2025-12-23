const txtcar = document.getElementById("txtcar")
const txtprice = document.getElementById("txtprice")
const btnadd = document.getElementById("btnadd")
const btncancel = document.getElementById("btncancel")
const tbdy = document.getElementById("tbdy")
const presult = document.getElementById("presult")
const txtindex = document.getElementById("txtindex")
const txtsearch = document.getElementById("txtsearch")

let carsary = [
    { name: "BMW", price: 5500000 },
    { name: "Audi", price: 6000000 },
    { name: "Mercedes", price: 7500000 },
    { name: "Tesla", price: 8200000 }
]

const clearAll = () => {
    txtcar.value = ""
    txtprice.value = ""
    presult.innerHTML = ""
    btnadd.value = "Save"
}

btncancel.addEventListener("click", clearAll)

btnadd.addEventListener("click", () => {
    if (txtcar.value === "" || txtprice.value === "") {
        presult.innerHTML = "Please fill all the details"
        return
    }

    const car = {
        name: txtcar.value,
        price: Number(txtprice.value)
    }

    if (btnadd.value === "Save") {
        if (carsary.find(c => c.name === car.name)) {
            presult.innerHTML = "Car already added"
            return
        }
        carsary.push(car)
    } else {
        const index = txtindex.value
        carsary[index] = car
        btnadd.value = "Save"
    }

    showCars()
})

function showCars(arr = carsary) {
    tbdy.innerHTML = arr.map((c, i) => `
        <tr>
            <td>${c.name}</td>
            <td>${c.price}</td>
            <td><input type="button" value="Edit" onclick="editCar(${i})"></td>
            <td><input type="button" value="Delete" onclick="deleteCar(${i})"></td>
        </tr>
    `).join("")
    clearAll()
}

function deleteCar(index) {
    carsary.splice(index, 1)
    showCars()
}

function editCar(index) {
    txtcar.value = carsary[index].name
    txtprice.value = carsary[index].price
    btnadd.value = "Update"
    txtindex.value = index
}

txtsearch.addEventListener("input", Searchcar)

function Searchcar() {
    const maxPrice = Number(txtsearch.value)
    const filtered = carsary.filter(c => c.price <= maxPrice)
    showCars(filtered)
}

