const Tarefa = require("./tarefas"); 
let prompt = require("prompt-sync")()

/*2. Subclasse Tarefa Prioritária: Crie uma subclasse chamada TarefaPrioritária que herde da classe Tarefa . Adicione 
atributos específicos para _tarefas prioritárias, como nível de prioridade (alta, média, baixa) e data limite. 
*/

class TarefaPrioritaria extends Tarefa {
    constructor(descricao, prioridade, dataTermino) {
        super(descricao);
        this._prioridade = prioridade;
        this._dataTermino = dataTermino;
    }

    visualizarTarefa() {
        super.visualizarTarefa();
        console.log("Prioridade: " + this._prioridade);
        console.log("Data de Término: "+ this._dataTermino);
    }
}

module.exports = TarefaPrioritaria