function verificar() {

// Pega os valores inseridos no input para verificação
    var ladoA = parseInt(document.getElementById("hipotenusa").value);    
    var ladoB = parseInt(document.getElementById('catetoA').value);
    var ladoC = parseInt(document.getElementById('catetoB').value);

    // Verifica se todos os campos estão nulos
    if (ladoA == '' && ladoB == '' || ladoA =='' && ladoC == '' || ladoB =='' && ladoC == '') {
        return alert("Insira pelo menos dois números nos campos em branco.")
    }

    // Verifica se os valores inseridos respeitam as condições de existência de um triângulo
    if ((ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA)) {
        calcular(ladoA, ladoB, ladoC);
    }

    return;
}

// Faz os cálculos do teorema de pitágoras
function calcular(a, b, c) {
    if (a == '') {
        result = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
        console.log(result);
        return document.getElementById("resultado").innerHTML = result;

    }
    if (b == '') {
        result = Math.sqrt(Math.pow(a, 2) - Math.pow(c, 2));
        console.log(result);
        return document.getElementById("resultado").innerHTML = result;
    }

    if (c == '') {
        result = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
        console.log(result);
        return document.getElementById("resultado").innerHTML = result;
    }
    else {
        // Caso todos os valores tenham sido preenchidos, a calculadora verificará se a conta é válida.
        result = Math.pow(a, 2) == Math.pow(b, 2) + Math.pow(c, 2);
        console.log(result);
        if (result == true) {
            result = "Os valores são iguais!"
        } else {
            result = `O quadrado de ${a} é diferente da soma dos quadrados de ${b} e ${c}, verifique a ordem dos números inseridos e tente novamente.`
        }
        return document.getElementById("resultado").innerHTML = result;
  }
}