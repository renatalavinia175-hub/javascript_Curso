const filmes =[ 
    {nome: "Hmwn-Haranha",categoria: "Ação"},
    {nome: "Divertida Mente", categoria: "Animação" },
    {nome:"Vingadores", categoria: "Ação" },
    {nome:"Carros", categoria: "Animação"}
]
const resultado1 = filmes.filter(f => f.categoria === "Ação");
console.log(resultado1)

const resultado2 = filmes.filter(f => f.nome.includes("Carros"));
console.log(resultado2)