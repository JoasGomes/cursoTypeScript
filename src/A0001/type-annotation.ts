/* eslint-disable */
// tipos básicos(aqui ocorre inferência de tipos)
let nome: string = 'luiz';                        //qualquer tipo de string:'' "" ``
let idade: number = 30;                           //10, 1.54, -44, 0xff00f, 0b1010
let adulto: boolean = true;                       //true ou false
let simbolo: symbol = Symbol('qualquer-symbol');  //symbol
//let big: bigint = 10n;                          //bigint

//arrays
let arrayOfNumbers: Array<number> = [1,2,3];
let arrayOfNumbers2: number[] = [1,2,3];

let arrayOfStrings: Array<string> = ["blue","pink","yellow"];
let arrayOfStrings2: string[] = ["blue","pink","yellow"];

//objetos                                  opcional
let pessoa: {nome:string, idade:number, adulto?: boolean} = {
    idade:30,
    nome:"luiz",
    adulto:true,
};

//console.log(pessoa.nome);

//funções
function soma(x:number , y:number){
    return x + y;
}
const result = soma(2,2);

const soma2:(x:number, y:number) => number =(x, y) => x + y;
