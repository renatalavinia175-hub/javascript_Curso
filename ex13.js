let prompt=require(`prompt-sync`)({sigint:true});
let p1 = Number(prompt("prova 1 :"));
let p2 = Number(prompt("prova 2 :"));
let red = Number(prompt("Redação :"));

let total = p1 + p2 + red;

if (total >= 1500) 
    console.log("Pode estudar na UFLA");
else if (total >= 1000) 
    console.log("Estuda na unilavras");
else 
    console.log(V)