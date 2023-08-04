function verify() {
    let number1 = document.getElementById("number1");
    let value1 = parseInt(number1.options[number1.selectedIndex].value);

    let number2 = document.getElementById("number2");
    let value2 = parseInt(number2.options[number2.selectedIndex].value);

    let number3 = document.getElementById("number3");
    let value3 = parseInt(number3.options[number3.selectedIndex].value);

    if (value1 === 9 && value2 === 1 && value3 === 1) {
        document.getElementById('result').textContent = "Password 1 correcto";
    } else if (value1 === 7 && value2 === 1 && value3 === 4) {
        document.getElementById('result').textContent = "Password 2 correcto";
    } else {
        document.getElementById("result").textContent = "Password incorrecto";
    }
}
