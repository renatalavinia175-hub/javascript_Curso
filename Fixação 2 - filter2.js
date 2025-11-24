let prompt = require(`prompt-sync`)({sigint:true})
let idades = [14, 15, 16, 15, 13, 15, 17, 15, 14, 15];

let iguais15 = idades.filter(function(idade) {
    return idade === 15;
});
console.log(iguais15);