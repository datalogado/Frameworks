function multiplicar(){
    let num1 = document.getElementById("numero_1").value;
    let num2 = document.getElementById("numero_2").value;

    let resultado = num1 * num2;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado; 
}