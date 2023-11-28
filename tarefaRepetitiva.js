
const Tarefa = require("./tarefas")
let prompt = require("prompt-sync")()

/*1. Subclasse Tarefa Repetitiva: Crie uma subclasse chamada TarefaRepetitiva que herde da classe Tarefa . Adicione 
atributos específicos para _tarefas repetitivas, como frequência (diária, semanal, mensal) e data de início. 
*/

class TarefaRepetitiva extends Tarefa {
    constructor(descricao, frequencia, dataInicio) {
        super(descricao);
        this._frequencia = frequencia;
        this._dataInicio = dataInicio;
    }

    visualizarTarefa() {
        super.visualizarTarefa();
        console.log("Frequência: " + this._frequencia);
        console.log("Data de Início: " + this._dataInicio);
    }
}

module.exports = TarefaRepetitiva