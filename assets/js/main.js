const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const number = document.querySelector(".number")

btn1.addEventListener('click', function () {
    let currentNumber = parseInt(number.textContent);
    currentNumber --;
    number.textContent = currentNumber
    if (currentNumber < 0) {
        number.style.color = "red";
    } else if (currentNumber === 0) {
        number.style.color = "black";
    }
});

btn2.addEventListener('click', function () {
    number.textContent = 0;
    number.style.color = "black";
});

btn3.addEventListener('click', function () {
    let currentNumber = parseInt(number.textContent);
    currentNumber ++;
    number.textContent = currentNumber
    if(currentNumber > 0){
        number.style.color = "green"
    }else if( currentNumber === 0)
        number.style.color = "black";
});
