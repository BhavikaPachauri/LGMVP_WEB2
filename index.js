  // This function clear all the values
function clearScreen() {
    document.getElementById("output").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("output").value += value;
}
 
// This function evaluates the expression and returns output
function calculate() {
    var p = document.getElementById("output").value;
    var q = eval(p);
    document.getElementById("output").value = q;
}
