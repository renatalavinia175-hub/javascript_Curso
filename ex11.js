let prompt = require(`prompt-sync`)({sigint:true})
let numeros = [],num

 
for (let i = 0; i < 10; i++) {
 let num = Number(prompt(`digite ${i + 1} numero: `))
 numeros[i]= num
}
console.log(numeros)