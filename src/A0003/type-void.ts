function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'joas',
  sobrenome: 'vitor',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('joas', 'vitor');
pessoa.exibirNome();

export { pessoa };
