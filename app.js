let ac = document.querySelector("#ac");
let input = document.querySelector('input');
let allButtons = document.querySelectorAll('button');
let main = document.querySelector("body");
let cursr = document.querySelector(".cursor");


main.addEventListener("mousemove", (delta) => {
    cursr.style.top = `${delta.y}px`;
    cursr.style.left = `${delta.x}px`;
})


function type(which) {
    if (which.innerText == "AC") {
        input.value = "";
    } else if (which.id == "equal") {
        input.value = eval(input.value);
    } else if (which.id == "delete") {
        input.value = input.value.slice(0, input.value.length - 1);
    }
    else {
        input.value = input.value + which.innerText;
    }
}
window.addEventListener("keypress", function (details) {
    console.log(details.key);
    if (details.key == "Enter") {
        input.value = eval(input.value);
    } else if (details.key == "Backspace") {
        input.value = input.value.slice(0, input.value.length - 1);
    } else {
    }
});

for (let btns of allButtons) {
    btns.addEventListener("click", function () {
        console.log(this.innerText);
        type(this);

    });
}