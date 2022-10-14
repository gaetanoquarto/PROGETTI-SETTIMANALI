
function cancellaSchermo() {
    document.getElementById("risultato").value = "";
}

function display(value) {
    document.getElementById("risultato").value += value;
}

function calcola() {
    var schermo = document.getElementById("risultato").value;
    var risultato = eval(schermo);
    document.getElementById("risultato").value = risultato;
}