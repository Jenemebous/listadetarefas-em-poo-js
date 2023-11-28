const prompt = require("prompt-sync")();


class Tarefa {
    constructor(descricao, concluida = false) {
        this._descricao = descricao;
        this._concluida = concluida;
    }

    marcarComoConcluida() {
        this._concluida = true;
    }

    visualizarTarefa() {
        console.log("Tarefa: " + this._descricao);
        if (this._concluida) {
            console.log("Status: Concluída");
        } else {
            console.log("Status: Pendente");
        }
    }
}

module.exports = Tarefa