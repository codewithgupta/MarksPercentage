function appendChar(char) {
    var result = document.getElementById("result");
    result.value += char;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function deleteLastChar() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    var result = document.getElementById("result");
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}
