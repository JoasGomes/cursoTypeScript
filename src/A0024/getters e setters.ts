export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(valor: string) {
    this._cpf = valor;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('LUIZ', 'PAIVA', 30, '000.000.000-00');
pessoa.cpf = '000.000.000-99';
console.log(pessoa.cpf);
