var frutas = [
    {nome: "maça", preco: "1.50"},
    {nome: "banana", preco: "0.25"},
    {nome: "manga", preco: "2.40"},
    {nome: "mamão", preco: "7.50"},
    {nome: "morango", preco: "19.99"}
]

// percorrer um array com um filtro de preço

function filtro(filtro){
    for(var i = 0; i <= frutas.length; i++){
        if(frutas[i].preco >= filtro){
            document.writeln(frutas[i].nome);
        };
    };
};

//modo dark

function darkmode(){
    document.getElementById("light").classList.add("dark");
}

// calculadora 2

function calcular(num1, num2, operador){
    
    if(operador == "soma"){
        return num1 + num2;
    } else if(operador == "subtracao"){
        return num1 - num2;
    } else if(operador == multiplicacao){
        return num1 * num2;
    } else{
        return "erro";
    }
}

console.log(calcular(10, 5, "subtracao"));




