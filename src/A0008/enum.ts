// CRIA UM OBJETO COM SEU INDICES NUMERADOS
enum Cores {
  vermelho = 10, //0
  azul = 100, //1
  amarelo = 1000, //2
  roxo = 'roxo', //3
  verde = 201, //4
}

//ele unirá os enums
enum Cores {
  red = 20, //5
  blue = 200, //6
  yellow = 2000, //7
  purple = 'roxo', //8
  green = 301, //9
}

console.log(Cores);
console.log(Cores.vermelho); //10
console.log(Cores[10]); //vermelho
console.log(Cores.roxo);
