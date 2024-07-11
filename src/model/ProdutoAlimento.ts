
import { Produto } from "./produto";

export class ProdutoAlimento extends Produto {

  private _dataValidade: string;

  constructor(
    id: number,
    nome: string,
    preco: number,
    quantidade: number,
    dataValidade: any ) {
    super(id, nome, preco, quantidade);
    this._dataValidade = dataValidade;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Data de Validade: ${this._dataValidade}`);
  }

  get dataValidade(): string {
    return this._dataValidade;
  }

  set dataValidade(value: string) {
    this._dataValidade = value;
  }
}