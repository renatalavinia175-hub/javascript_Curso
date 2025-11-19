// Filtre apenas os alunos que têm 15 anos
let alunos = [   "Ana-15", "Carlos-14", "Maria-15", "João-16","Beatriz-15", "Pedro-13", "Luiza-15", "Ricardo-14"];

let alunos15 = alunos.filter(function(aluno) {
    return aluno.includes("-15")
});
console.log(alunos15);