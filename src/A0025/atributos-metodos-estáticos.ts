export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  //basicamente é uma função que so é acessada pela classe
  //e não pela instância dela
  static falaOi(): void {
    console.log('oi');
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '0000000000');
  }
}

const pessoa1 = new Pessoa('LUIZ', 'PAIVA', 30, '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('MARIA', 'SILVA');

console.log(pessoa1);
console.log(pessoa2);

Pessoa.falaOi();
