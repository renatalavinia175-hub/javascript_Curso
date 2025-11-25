
    
const usuarios = [                                                         
    {nome: "João", estado: "SP" },
    {nome: "Mariana", estado: "MG" },
    {nome: "Cauã", estado: "MG" },
    {nome: "Bianca", estado: "RJ"}
];
const lugar = usuarios.filter( u =>u.estado === "MG");
console.log(lugar);