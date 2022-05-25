export class Pessoa {
  constructor(
    //atributos
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  //métodos
  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do aluno' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('LUIZ', 'PAIVA', 30, '000.000.000-00');
const cliente = new Cliente('LUIZ', 'PAIVA', 30, '000.000.000-00');

console.log(aluno);
console.log(cliente);
