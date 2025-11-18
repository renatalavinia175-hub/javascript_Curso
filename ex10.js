//meu documento inicial
let prompt=require(`prompt-sync`)({sigint:true});
let soma = 0

while(soma <=100){
    let valor = Number(prompt("digite um valor:"));
    soma = soma + valor;
}
console.log("a soma passou de 100: soma final:"+ soma);