let saldo = 12500;

while (saldo > 0) {
    let saque = +prompt("Saldo: R$ " + saldo.toFixed(2) + ". Quanto quer sacar?");
    if (saque > saldo) {
        alert("Saldo insuficiente");
    } else {
        saldo = saldo - saque;
        alert("Saque feito, Resta: R$" + saldo.toFixed(2));
    }
}
alert("Saldo zerado");

