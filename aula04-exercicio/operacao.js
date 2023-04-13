let nota1 = parseInt(prompt("Digite o primeiro valor"));
let nota2 = parseInt(prompt("Digite o segundo valor"));

let operacao = prompt("Escolha a operação desejada: 1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão");

switch(operacao){
    case "1":
        let adic = nota1 + nota2;
        alert("Resultado da Soma " + adic);
    break;

    case "2":
        let subt = nota1 - nota2;
        alert("Resultado da Subtração " + subt);
    break;
    case "3":
        let mult = nota1 * nota2;
        alert("Resultado da Multiplicação " + mult);
    break;
    case "4":
        let div = nota1 / nota2;
        alert("Resultado da Divisão " + div);
    break;
    default:
        alert("Operação inválida");
    break;

}