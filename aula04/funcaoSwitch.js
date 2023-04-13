let idade = prompt("Digite sua idade - opção 1 - 29 ou menos, opção 2 - 40 até 59, opção 3 - 60 ou mais.");

switch(idade){
    case "1":
        alert("Vc escolhe a opção 1 - que é 20 - Vc está no auge da vida.");
    break;
    case "2":
        alert("Vc escolhe a opção 2 - que é 40 - Começando a vida.");
    break;
    case "3":
        alert("Vc escolhe a opção 3 - que é 60 - Melhor da vida.");
    break;
    default:
        alert("Quase morto.");
    break;

}