const modal = document.getElementById('modal');
const modalButton = document.getElementById('modalButton');
const colorInput = document.getElementById('colorInput');
const colorButton = document.getElementById('colorButton');
const averageInput = document.getElementById('averageInput');
const averageButton = document.getElementById('averageButton');

modalButton.onclick = () => {
    modal.style.display = "block";
}
window.onclick = (e) => {
    if(e.target == modal) modal.style.display = "none";
}

colorButton.addEventListener("click", () => {
    if(colorInput.value != 'red' && colorInput.value != 'blue' && colorInput.value != 'green'
     && colorInput.value != 'black' && colorInput.value != 'white') {
        alert("Enter only: red, blue, green, black or white");
     }else {
        document.body.style.backgroundColor = colorInput.value;
     }
});

averageButton.addEventListener("click", () => {
    const numbers = averageInput.value.split(':');
    let result = 0;
    for(let num of numbers) {
        result += Number(num);
    }
    result /= numbers.length;
    alert("average is: " + result);
})
