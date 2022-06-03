type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 10,
};

export const vacinas = obterChave(animal, 'vacinas');
export const cor = obterChave(animal, 'cor');
export const idade = obterChave(animal, 'idade');

console.log(vacinas);
console.log(cor);
console.log(idade);
