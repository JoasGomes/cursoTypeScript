interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'joas',
  sobrenome: 'gomes',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 12,
  sobrenome: 4545,
  idade: 30,
};

const aluno3: PessoaProtocolo = {
  nome: 'joas',
  sobrenome: 'gomes',
  idade: 30,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
