const prompt = require(`prompt-sync`)({sigint:true})
const mensagens = [
   {id: 1, frase: "Hoje o dia esta lindo!"},
   {id: 2, frase: "não gostei desse trabalho"},
    {id: 3, frase: "A aula foi muito divertida"},
    {id: 4, frase:"Que tarefa chata"},
];
 
const resultado = mensagens.filter(u=>u.frase.includes("não gostei"))
const resultado1 = mensagens.filter(u=>u.frase.includes( "chata"))
console.log(resultado);
console.log(resultado1);