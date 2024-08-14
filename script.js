const input = document.getElementById("input")
const output = document.getElementById("output")

function calc() {
    // Remover espaço
    input.value = input.value.replace(/\s+/g, '');
    // Separar denominador do numberador
    let numbers = input.value.split("/");

    let k1 = parseInt(numbers[0], 10);
    let k2 = parseInt(numbers[1], 10);

    let a;
    let b;

    if (k1 > k2) {
        a = k1;
        b = k2;
    } else if (k1 < k2) {
        a = k2;
        b = k1;
    } else {
        output.value = 1;
    }

    let R = 1;

    while (1) {
        R = a % b;
        a = b;
        if (R === 0) {
            break
        }
        b = R
    }
    
    let MFC = b; // Maior Fator Comum

    let n1 = k1/MFC
    let n2 = k2/MFC

    if (n2 == 1) {
        output.value = n1;
    } else {
        output.value = n1 + "/" + n2;
    }
}

function copiar() { 
    output.select();
    output.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(output.value);
  }