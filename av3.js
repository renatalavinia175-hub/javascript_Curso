const prompt = require(`cprompt-sync`)({sigint:true})
    
const usuarios = [                                                         
    {nome: "João", estado: "SP" },
    {nome: "Mariana", estado: "MG" },
    {nome: "Cauã", estado: "Mg" },
    {nome: "Bianca", estado: "RJ"}
];
const usuariosMG = usuarios.filter(u=>u.estado.includes ("MG"));
console.log(usuariosMG);