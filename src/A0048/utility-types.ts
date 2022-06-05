//record
const objeto1: Record<string, string | number> = {
  nome: 'joás',
  sobrenome: 'gomes',
  idade: 20,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//required
type PessoaRequired = Required<PessoaProtocol>;
//partial
type PessoaPartial = Partial<PessoaRequired>;
//readonly
type PessoaReadonly = Readonly<PessoaRequired>;
//pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'joás',
  sobrenome: 'gomes',
  idade: 20,
};
console.log(objeto2);

// extract e exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
};

const accountMongo: AccountMongo = {
  _id: 'joas',
  nome: 'joas',
  idade: 20,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
