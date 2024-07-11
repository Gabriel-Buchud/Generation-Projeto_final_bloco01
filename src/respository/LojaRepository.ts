
import { Produto } from "../model/Produto";

export interface LojaRepository {

  cadastrar(produto: Produto): void;
  atualizar(produto: Produto, idConsulta: number): void;
  deletar(id: number): void;
  listarTodos(): void;
  listarPorId(id: number): Produto | undefined;

}
