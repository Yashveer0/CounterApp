// getting the html elements
const decrementbtn = document.getElementById("btn-");
const incrementbtn = document.getElementById("btn+");
const resetbtn = document.getElementById("reset");
const displayvalue = document.getElementById("displayvalue");

// for decrement button click
decrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if(value > -10) {
        displayvalue.innerText = value - 1;
    }else {
        alert("10- value is not allowed");
    }
});

// for increment button click

incrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if(value >= 10) {
        alert("10+ value are Not allowed")
    }else {
        displayvalue.innerText = value + 1;
    }
});

// for reset button click

resetbtn.addEventListener("click", () => {
    displayvalue.innerText = 0;
});