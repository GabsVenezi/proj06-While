let valor = -1; 
let total = 0;
while (valor !== 0) {
    valor = Number(prompt("Valor da compra (digite 0 para exibir o total da compra):"));

    if (valor > 0) {
        total = total + valor;
    } else if (valor < 0) {
        alert("Números negativos não são aceitos");
    }
}
alert("O total da compra é R$ " +  total.toFixed(2));