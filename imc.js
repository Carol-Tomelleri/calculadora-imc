const nome = 'Caroline';
const sobrenome = 'Tomeleri';
const idade = 31;
const peso = 85;
const alturaEmM = 1.63;
let imc; 
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)