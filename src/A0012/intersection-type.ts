type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

/* type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type intersecao = AB & AC & AD; */

const pessoa: Pessoa = {
  idade: 30,
  nome: 'luiz',
  sobrenome: 'gomes',
};

console.log(pessoa);

// Module mode
export { pessoa };
