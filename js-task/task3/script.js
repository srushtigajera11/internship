const n = document.getElementById("txtname");
const contact = document.getElementById("txtcontact")
const email = document.getElementById("txtemail")
const houseNo = document.getElementById("houseNo")
const street = document.getElementById("street")
const landmark = document.getElementById("landmark")
const city = document.getElementById("city")
const pincode = document.getElementById("pincode")
const form = document.getElementById("formuser")
const result = document.getElementById("presult")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    userData ={
        username : n.value,
        contact : contact.value,
        email : email.value,
        address : {
            houseNo : houseNo.value,
            street : street.value,
            landmark : landmark.value,
            city : city.value,
            pincode : pincode.value
        }
    }
    result.innerHTML = JSON.stringify(userData)
    
})