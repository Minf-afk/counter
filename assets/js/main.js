const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const number = document.querySelector(".number")

btn1.addEventListener('click', function () {
    let currentNumber = parseInt(number.textContent);
    number.textContent = currentNumber - 1;
});

btn2.addEventListener('click', function () {
    number.textContent = 0;
});

btn3.addEventListener('click', function () {
    let currentNumber = parseInt(number.textContent);
    number.textContent = currentNumber + 1;
});