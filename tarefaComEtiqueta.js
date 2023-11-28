const Tarefa = require("./tarefas"); 
let prompt = require("prompt-sync")()

/*3. Subclasse TarefaComEtiqueta: Crie uma subclasse chamada TarefaComEtiqueta que herde da classe Tarefa . Adicione 
atributos específicos para _tarefas com etiquetas, como uma lista de etiquetas associadas à tarefa. */

class TarefaComEtiqueta extends Tarefa {
    constructor(descricao, etiqueta) {
        super(descricao);
        this._etiqueta = etiqueta;
    }

    visualizarTarefa() {
        super.visualizarTarefa();
        console.log("Etiqueta: " + this._etiqueta);
    }
}

module.exports = TarefaComEtiqueta