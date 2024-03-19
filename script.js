let inputBx = document.querySelector("#inputBx");
let list = document.querySelector("#list");

inputBx.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        if (this.value != "") {
            addItem(this.value);
            this.value = "";
        }
    }
})

function addItem(x) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${x}<i></i>`;

    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    })

    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove()
    })

    list.appendChild(listItem);
}

let year = document.querySelector("#year");
year.innerHTML = yearName();

function yearName() {
    const date = new Date();
    const year = date.getFullYear();
    return year
}
