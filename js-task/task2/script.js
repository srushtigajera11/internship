const txta = document.getElementById("txta");
const txtb = document.getElementById("txtb");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
const resultP = document.getElementById("result");

addBtn.addEventListener("click", () => calc('+'));
subBtn.addEventListener("click", () => calc('-'));
mulBtn.addEventListener("click", () => calc('*'));
divBtn.addEventListener("click", () => calc('/'));

function calc(operation) {
    const a = parseFloat(txta.value);
    const b = parseFloat(txtb.value);
    let result;
    if (isNaN(a) || isNaN(b) || txta.value === "" || txtb.value === "") {
                resultP.innerHTML = "Please enter valid numbers.";
                return;
            }
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;

    }

    resultP.innerHTML = "your answer is " + result;
}