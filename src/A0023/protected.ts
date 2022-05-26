export class Empresa {
  public readonly nome: string;
  //protected pode ser acessado na classe e subclasse dele.
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

  public getNome(): string {
    return this.nome;
  }
}

export class Bmw extends Empresa {
  constructor() {
    super('BMW', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Bmw();
const colaborador1 = new Colaborador('JOAS', 'VITOR');
const colaborador2 = new Colaborador('DANILO', 'VITOR');
const colaborador3 = new Colaborador('PEDRO', 'VITOR');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);

empresa1.mostrarColaboradores();

console.log(empresa1);
