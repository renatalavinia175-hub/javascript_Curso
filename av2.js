const produtos =[
    {id: 1, nome: "Fone Bluetooh" },
    {id: 2, nome: "Mouse Gamer" },
    {id: 3, nome: "Fone com fio" },
    {id: 4, nome: "Teclado Mecanico" }
];
const resultado= produtos.filter(produto=>produto.nome.includes("Fone"));
console.log(resultado)