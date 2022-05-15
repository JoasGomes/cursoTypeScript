// o valor das atribuições de let podem mudar(não literal)
let x = 10; // eslint-disable-line
x = 0b1010;

console.log(x);

//10 é um tipo literal pq está na const
const y = 10;

console.log(y);

//é errado fazer isso mas tbm da pra criar um literal type
let a: 100 = 100; // eslint-disable-line

const person = {
  nome: 'luiz' as const, // nome de person só pode ser 'luiz'
  sobrenome: 'vitor',
};

function escolhaCor(cor: 'vermelho' | 'amarelo' | 'azul') {
  return cor;
}
console.log(escolhaCor('amarelo'));

console.log(person);

// Module mode
export default 1;
