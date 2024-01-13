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
    } else if (document.getElementById('divide').checked) {
        total = num1 / num2 
        if (document.getElementById('divide').checked && num2 == 0) {
        document.getElementById('Resultado').innerText = 'Não é possível realizar divisão por zero';
        return
    } 
    }

    document.getElementById('Resultado').innerText = 'O resultado é: ' + String(total)
}