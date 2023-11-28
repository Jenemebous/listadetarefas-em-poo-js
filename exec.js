const prompt = require("prompt-sync")()
let TarefaComEtiqueta = require("./tarefaComEtiqueta"); 
let TarefaPrioritaria = require("./tarefaPrioritaria"); 
let TarefaRepetitiva = require("./tarefaRepetitiva"); 
let Tarefa = require("./tarefas");

let obj = {
    listaDeTarefas: []
  };
  
  console.log("\n");
  console.log("Bem-vindo(a) à sua lista de tarefas");
  
  while (true) {
    let opcao = prompt("Digite a opção desejada (a para adicionar, c para marcar como concluída, v para visualizar, r para remover, s para sair):");
  
  
    if (opcao === "a") {
      let descricao = prompt("Digite a tarefa: ");
    
      let tipoTarefa = prompt("Escolha o tipo de tarefa (com etiqueta(ce), prioritária(p), repetitiva(rr)): ");

  
      if (tipoTarefa === "ce") {
        let etiqueta = prompt("Digite a etiqueta da tarefa: ");
        obj.listaDeTarefas.push(new TarefaComEtiqueta(descricao, etiqueta));
      } else if (tipoTarefa === "p") {
        let prioridade = prompt("Digite a prioridade da tarefa (alta, média, baixa): ");
        let dataTermino = prompt("Digite a data de término da tarefa: ");
        obj.listaDeTarefas.push(new TarefaPrioritaria(descricao, prioridade, dataTermino));
      } else if (tipoTarefa === "rr") {
        let frequencia = prompt("Digite a frequência da tarefa (diária, semanal, mensal): ");
        let dataInicio = prompt("Digite a data de início da tarefa: ");
        obj.listaDeTarefas.push(new TarefaRepetitiva(descricao, frequencia, dataInicio));
      } else {
        obj.listaDeTarefas.push(new Tarefa(descricao));
      }
  
      console.log("Tarefa adicionada com sucesso.");
      console.log("\n");
    } else if (opcao === "c") {
      let i = parseInt(prompt("Digite o número da tarefa a ser marcada como concluída:")) - 1;
  
      if (i >= 0 && i < obj.listaDeTarefas.length) {
        obj.listaDeTarefas[i].marcarComoConcluida();
        console.log("Tarefa marcada como concluída.");
      } else {
        console.log("Tarefa não encontrada.");
      }
  
      console.log("\n");
    } else if (opcao === "v") {
      console.log("Lista de Tarefas:");
      console.log("\n");
  
      for (let i = 0; i < obj.listaDeTarefas.length; i++) {
        console.log("Tarefa " + (i + 1) + ":");
        obj.listaDeTarefas[i].visualizarTarefa();
        console.log("\n");
      }

  
      console.log("\n");
    } else if (opcao === "r") {
      let i = parseInt(prompt("Digite o número da tarefa a ser removida:")) - 1;
  
      if (i >= 0 && i < obj.listaDeTarefas.length) {
        obj.listaDeTarefas.splice(i, 1);
        console.log("Tarefa removida com sucesso.");
        console.log("\n");
      } else {
        console.log("Tarefa não encontrada.");
        console.log("\n");
      }
    } else if (opcao === "s") {
      console.log("Saindo...");
      break;
    }
  }
  
  console.log("\n");
  console.log("Obrigado por utilizar o nosso sistema - By Ana Gabriely");
  console.log("\n");
  