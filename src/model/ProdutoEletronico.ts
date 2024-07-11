
import { Produto } from "./produto";

export class ProdutoEletronico extends Produto {

  private _garantia: number

  constructor(
    id: number,
    nome: string,
    preco: number,
    quantidade: number,
    garantia: number ) {
    super(id, nome, preco, quantidade);
    this._garantia = garantia;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Garantia: ${this._garantia} meses`);
  }

  get garantia(): number {
    return this._garantia;
  }

  set garantia(value: number) {
    this._garantia = value;
  }
}
