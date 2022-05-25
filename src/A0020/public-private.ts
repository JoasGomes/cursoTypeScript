export class Empresa {
  public readonly nome: string; // public não é necessário
  //private não pode ser acessado fora da classe
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  //redundante, public pode ser acessado diretamente.
  public getNome(): string {
    return this.nome;
  }
}

//nesse modo tem q ser especificado se é public(não pode dx vazio)
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('BMW', '11.111.111/0001-11');
const colaborador1 = new Colaborador('JOAS', 'VITOR');
const colaborador2 = new Colaborador('DANILO', 'VITOR');
const colaborador3 = new Colaborador('PEDRO', 'VITOR');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

empresa1.mostrarColaboradores();

console.log(empresa1);
