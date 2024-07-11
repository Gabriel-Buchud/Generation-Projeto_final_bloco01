import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";

let opcao: number;
let idConsulta: number;
let preco: number;
let quantidade: number;
let nome: string;

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
      break;

      keyPress()
      break;
      
    case 2:
      console.log("\nListar Produto pelo ID\n");
      idConsulta = readlinesync.questionInt("Digite o ID do produto: ");
      break;

      keyPress()
      break;

    case 3:
      console.log("\nCadastrar Produto\n");
      nome = readlinesync.question("Digite o nome do produto: ");
      preco = readlinesync.questionFloat("Digite o preço do produto: ");
      quantidade = readlinesync.questionInt("Digite a quantidade do produto: ");
      console.log("Produto cadastrado com sucesso!");
      break;

      keyPress()
      break;

    case 4:
      console.log("\nAtualizar Produto\n");
      idConsulta = readlinesync.questionInt("Digite o ID do produto: ");
      nome = readlinesync.question("Digite o novo nome do produto: ");
      preco = readlinesync.questionFloat("Digite o novo preço do produto: ");
      quantidade = readlinesync.questionInt("Digite a nova quantidade do produto: ");
      break;

      keyPress()
      break;

    case 5:
      console.log("\nDeletar Produto\n");
      idConsulta = readlinesync.questionInt("Digite o ID do produto: ");
      break;

      keyPress()
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
