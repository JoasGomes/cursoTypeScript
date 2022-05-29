export class CarinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('calça', 80.9);
const produto3 = new Produto('tenis', 70.9);

const carrinhoDeCompras = new CarinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeDeProdutos());
