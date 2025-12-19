const searchInput = document.getElementById("btn");
const listItems = document.querySelectorAll("#list li");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    listItems.forEach(function (item) {
        const text = item.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });


});
