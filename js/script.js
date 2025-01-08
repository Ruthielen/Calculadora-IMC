function Soma() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos!";
        return;
    }

    altura = altura / 100;

    let imc = peso / (altura ** 2);
    imc = imc.toFixed(2); 

    let classificacao = "";
    let imagemDiv = document.getElementById("imagemDiv");  

    if (imc < 18.5) {
        classificacao = "Baixo peso";
        imagemDiv.innerHTML = '<img src="img/baixo-peso.png" alt="Pessoa abaixo do peso">';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
        imagemDiv.innerHTML = '<img src="img/peso-normal.png" alt="Pessoa abaixo do peso">';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Excesso de peso"
        imagemDiv.innerHTML = '<img src="img/excesso-peso.png" alt="Pessoa abaixo do peso">';  
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obsidade classe 1"
        imagemDiv.innerHTML = '<img src="img/obsidade-classe-1.png" alt="Pessoa abaixo do peso">';  
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade de Classe 2";
        imagemDiv.innerHTML = '<img src="img/obsidade-classe-2.png" alt="Pessoa abaixo do peso">';  
    } else if (imc >= 40) {
        classificacao = "Obesidade de Classe 3";
        imagemDiv.innerHTML = '<img src="img/obsidade-classe-3.png" alt="Pessoa abaixo do peso">'; 
    }

    document.getElementById("resultado").innerText = `Seu IMC é ${imc} (${classificacao}).`;
}
