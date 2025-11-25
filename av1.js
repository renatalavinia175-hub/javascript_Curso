const alunos = [
    {nome: "Lavínia", nota: 8 },
    {nome: "Ana", nota: 5},
    {nome: "Pedro", nota: 9},
    {nome: "Carla", nota: 4}
];
const aprovados=alunos.filter(aluno=> aluno.nota>6);
console.log(aprovados)