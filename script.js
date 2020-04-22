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

