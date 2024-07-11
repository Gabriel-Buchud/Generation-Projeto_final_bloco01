import readlinesync = require("readline-sync");
import { LojaController } from "./src/controller/LojaController";
import { ProdutoAlimento } from "./src/model/ProdutoAlimento";
import { ProdutoEletronico } from "./src/model/ProdutoEletronico";

export function main() {

  const lojaController: LojaController = new LojaController();
  let opcao: number;
  let idConsulta: number;
  let preco: number;
  let quantidade: number;
  let nome: string;
  let dataValidade: string;
  let garantia: number;

  while (true) {
    console.log(`\n
    ==========================================
            Sistema de Gerenciamento
    ==========================================
            1 - Listar todos os Produtos
            2 - Listar Produto pelo ID
            3 - Cadastrar Produto
            4 - Atualizar Produto
            5 - Deletar Produto
            0 - Sair
    ===========================================
  `);

    opcao = readlinesync.questionInt("Escolha uma opcao: ");

    if (opcao === 0) {

      console.log("\nSaindo do sistema...");
      break;

    }

    switch (opcao) {
      case 1:

        console.log("\nListar todos os Produtos\n");
        lojaController.listarTodos();
        break;

      case 2:

        console.log("\nListar Produto pelo ID\n");
        idConsulta = readlinesync.questionInt("Digite o ID do produto: ");
        lojaController.listarPorId(idConsulta);
        break;

      case 3:
        console.log("\nCadastrar Produto\n");
        nome = readlinesync.question("Digite o nome do produto: ");
        preco = readlinesync.questionFloat("Digite o preço do produto: ");
        quantidade = readlinesync.questionInt("Digite a quantidade do produto: ");
        console.log("1 - Alimentício");
        console.log("2 - Eletrônico");
        let tipoProduto = readlinesync.questionInt("Digite o tipo do produto (1 ou 2): ");

        if (tipoProduto === 1) {

          dataValidade = readlinesync.question("Digite a data de validade: ");
          lojaController.cadastrar(new ProdutoAlimento(lojaController.gerarNumero(), nome, preco, quantidade, dataValidade));
          console.log("Produto alimentício cadastrado com sucesso!");

        } else if (tipoProduto === 2) {

          garantia = readlinesync.questionInt("Digite tempo da garantia: ");
          lojaController.cadastrar(new ProdutoEletronico(lojaController.gerarNumero(), nome, preco, quantidade, garantia));
          console.log("Produto alimentício cadastrado com sucesso!");
        } else {

          console.log("Opção inválida! Produto não cadastrado.");

        }
        break;

      case 4:

        console.log("\nAtualizar Produto\n");
        idConsulta = readlinesync.questionInt("Digite o ID do produto: ");
        nome = readlinesync.question("Digite o novo nome do produto: ");
        preco = readlinesync.questionFloat("Digite o novo preço do produto: ");
        quantidade = readlinesync.questionInt("Digite a nova quantidade do produto: ");
        let produto = lojaController.buscarNoArray(idConsulta);
        if (produto) {

          produto.preco = preco
          produto.nome = nome
          produto.id = idConsulta
          produto.quantidade = quantidade
          lojaController.atualizar(produto, idConsulta)
        }
        break;

      case 5:

        console.log("\nDeletar Produto\n");
        idConsulta = readlinesync.questionInt("Digite o ID do produto: ");
        lojaController.deletar(idConsulta);
        break;

      case 0:

        console.log("\nSaindo do sistema...");
        break;

      default:
        console.log("Opção inválida!");
        break;
    }

  }

  function sobre(): void {

    console.log("===================================================");
    console.log("Projeto Desenvolvido por: Gabriel Buchud Rodrigues ");
    console.log("Email - gabrielbuchudestudos@gmail.com");
    console.log("https://github.com/Gabriel-Buchud");
    console.log("=====================================================");
  }

  function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
  }
} main();
