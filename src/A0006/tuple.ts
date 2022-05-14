// tuple
const dadosCliente1: [number, string] = [1, 'luiz'];
const dadosCliente2: [number, string, string] = [1, 'luiz', 'junior'];
const dadosCliente3: [number, string, string?] = [1, 'luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'luiz'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'joas';
dadosCliente2[2] = 'vitor';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array: readonly string[] = ['joas', 'vitor'];
const array2: ReadonlyArray<string> = ['joas', 'vitor'];

console.log(array);
console.log(array2);
