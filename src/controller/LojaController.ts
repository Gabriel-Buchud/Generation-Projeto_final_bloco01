import { LojaRepository } from "../respository/LojaRepository";
import { Produto } from "../model/Produto";


export class LojaController implements LojaRepository {
  private produtos: Array<Produto> = new Array<Produto>();

  public id: number = 0;

  cadastrar(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto com ID ${produto.id} cadastrado.`);
  }

  atualizar(produto: Produto, idConsulta: number): void {
    let index = this.procurarIndicePorId(produto.id);
    if (index !== -1) {
      this.produtos[index] = produto;
      console.log(`Produto com ID ${produto.id} atualizado.`);
    } else {
      throw new Error(`Produto com ID ${produto.id} não encontrado.`);
    }
  }

  deletar(id: number): void {
    let index = this.procurarIndicePorId(id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
      console.log(`Produto com ID ${id} deletado.`);
    } else {
      throw new Error(`Produto com ID ${id} não encontrado.`);
    }
  }

  listarTodos(): void {
    console.log("Listando todos os produtos:");
    for (const produto of this.produtos) {
      produto.visualizar()
    }
  }

  listarPorId(id: number): Produto | undefined {
    let produto = this.produtos.find((p) => p.id === id);
    return produto;
  }

  public procurarIndicePorId(id: number): number {
    return this.produtos.findIndex((p) => p.id === id);
  }

  public buscarNoArray(id: number): Produto | null {
    for (const produto of this.produtos) {
      if (produto.id === id) return produto;
    }
    return null;
  }
  public gerarNumero(): number {
    return ++this.id;
  }

}
