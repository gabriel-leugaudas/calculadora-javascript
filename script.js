function msg(result) {
    result.value = ""
}

var buttonsElements = document.getElementsByTagName('button');
var result = document.getElementById('resultado');

buttonsElements[0].onclick = function() {
    result.textContent = result.textContent + 9;
    result.value = result.value + '9';
}

buttonsElements[1].onclick = function() {
    result.textContent = result.textContent + 8;
    result.value = result.value + '8';
}

buttonsElements[2].onclick = function() {
    result.textContent = result.textContent + 7;
    result.value = result.value + '7';
}

buttonsElements[4].onclick = function() {
    result.textContent = result.textContent + 6;
    result.value = result.value + '6';
}

buttonsElements[5].onclick = function() {
    result.textContent = result.textContent + 5;
    result.value = result.value + '5';
}

buttonsElements[6].onclick = function() {
    result.textContent = result.textContent + 4;
    result.value = result.value + '4';
}

buttonsElements[8].onclick = function() {
    result.textContent = result.textContent + 3;
    result.value = result.value + '3';
}

buttonsElements[9].onclick = function() {
    result.textContent = result.textContent + 2;
    result.value = result.value + '2';
}

buttonsElements[10].onclick = function() {
    result.textContent = result.textContent + 1;
    result.value = result.value + '1';
}

buttonsElements[12].onclick = function() {
    result.textContent = result.textContent + 0;
    result.value = result.value + '0';
}

// PONTO
buttonsElements[13].onclick = function() {
    var separado = result.value.split("-")
    console.log(separado[1])
    var operador1 = result.value.indexOf(".")
    console.log(operador1)
    if (operador1 >= 3) {
        result.value = result.value
    }
    else if (separado[1] == 3) {
        result.value = result.value + "."
    }
    else if (operador1 >= 2) {
        result.value = result.value
    }
    else if (result.value == ".") {
        result.value = result.value
    }
    else {
        result.value = result.value + '.';
    }
}

// OPERADORES
buttonsElements[3].onclick = function() {
    valor = result.value.indexOf("-" || "+" || "*" || "/")
    if (valor >= 0) {
        result.value = result.value
    }
    else if (result.value == "") {
        result.value = ""
    }
    else if (result.value == "+") {
        result.value = ""
    }
    else {
        result.value = result.value + '+'
    }
}

buttonsElements[7].onclick = function() {
    valor = result.value.indexOf("-" || "+" || "*" || "/")
    if (valor >= 0) {
        result.value = result.value
    }
    else if (result.value == "") {
        result.value = ""
    }
    else if (result.value == "-") {
        result.value = ""
    }
    else {
        result.value = result.value + '-'
    }
}

buttonsElements[11].onclick = function() {
    valor = result.value.indexOf("+" || "-" || "*" || "/")
    if (valor >= 0) {
        result.value = result.value
    }
    else if (result.value == "") {
        result.value = ""
    }
    else if (result.value == "*") {
        result.value = ""
    }
    else {
        result.value = result.value + '*'
    }
}

buttonsElements[15].onclick = function() {
    valor = result.value.indexOf("+" || "-" || "*" || "/")
    if (valor >= 0) {
        result.value = result.value
    }
    else if (result.value == "") {
        result.value = ""
    }
    else if (result.value == "/") {
        result.value = ""
    }
    else {
        result.value = result.value + '/'
    }
}

//RESULTADO
buttonsElements[14].onclick = function() {
    var input = result.value;
    if (input.indexOf("+") >= 0) {
        var resultado = input.split("+");
        res = parseFloat(resultado[0]) + parseFloat(resultado[1]) || "Erro de operação";
        result.value = res;
    }
    else if (input.indexOf("-") >= 0) {
        var resultado = input.split("-");
        res = parseFloat(resultado[0]) - parseFloat(resultado[1]) || "Erro de operação";
        result.value = res;
    } 
    else if (input.indexOf("*") >= 0) {
        var resultado = input.split("*");
        res = parseFloat(resultado[0]) * parseFloat(resultado[1]) || "Erro de operação";
        result.value = res;
    } 
    else if (input.indexOf("/") >= 0) {
        var resultado = input.split("/");
        res = parseFloat(resultado[0]) / parseFloat(resultado[1]) || "Erro de operação";
        result.value = res;
    }
    else {
        result.value = result.value
    }
}