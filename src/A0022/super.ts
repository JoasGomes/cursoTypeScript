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
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    //quando precisamos que algo seja computador primeiro
    console.log('fazendo algo antes');
    //ultilizaremos o super após para ter acesso a super classe
    const result = super.getNomeCompleto();
    return result + 'ola';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'isso vem do cliente' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('LUIZ', 'PAIVA', 30, '000.000.000-00', '12');
const cliente = new Cliente('LUIZ', 'PAIVA', 30, '000.000.000-00');

console.log(aluno);
console.log(cliente);
