/* type CoresObj = {
  vermelho: string;
  verde: string;
  azul: string;
}; */

type CoresObj = typeof coresBbj;
type CoresChaves = keyof CoresObj;

const coresBbj /* : CoresObj */ = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresBbj));
console.log(traduzirCor('verde', coresBbj));
