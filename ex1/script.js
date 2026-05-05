let contador = -1; 
while (contador <= 0) {
    contador = Number(prompt("Insira um número positivo"));
    if (contador <= 0) {
        alert("Este número não é positivo");
    }
    if (contador > 0) {
        alert("Este número é positivo");
    }
}