interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'joas',
  sobrenome: 'gomes',
  enderecos: ['av.brasil'],
};

pessoa.idade = 31;
console.log(pessoa);
