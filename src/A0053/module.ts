/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Luiz';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('joás');
  console.log(pessoa);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Luiz';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('joás');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
