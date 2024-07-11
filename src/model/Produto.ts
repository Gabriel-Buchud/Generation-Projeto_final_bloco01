export abstract class Produto {

  private _id: number;
  private _nome: string;
  private _preco: number;
  private _quantidade: number;

  constructor(id: number, nome: string, preco: number, quantidade: number) {
    this._id = id;
    this._nome = nome;
    this._preco = preco;
    this._quantidade = quantidade;
  }

  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get preco(): number {
    return this._preco;
  }

  public get quantidade(): number {
    return this._quantidade;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set preco(value: number) {
    this._preco = value;
  }

  public set quantidade(value: number) {
    this._quantidade = value;
  }


  visualizar() {

    console.log(`ID do produto: ${this._id}`);
    console.log(`Nome do produto: ${this._nome}`);
    console.log(`Preço do produto: ${this._preco}`);
    console.log(`Quantidade do produto: ${this._quantidade}`);

  }

}