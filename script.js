function conta() {
    num1 = Number(document.getElementById('num-1').value)
    num2 = Number(document.getElementById('num-2').value)
    total = 0

    if (document.getElementById('soma').checked) {
        total = num1 + num2
    } else if (document.getElementById('sub').checked) {
        total = num1 - num2
    } else if (document.getElementById('mult').checked) {
        total = num1 * num2
    } else { 
        total = num1 / num2
    } 

    document.getElementById('Resultado').innerHTML = 'O resultado é: ' + String(total)
}