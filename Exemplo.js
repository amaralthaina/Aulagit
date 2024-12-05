// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(tarefaTexto) {
    if (tarefaTexto) {
        tarefas.push({ texto: tarefaTexto, concluida: false });
    }
}

// Função para listar as tarefas
function listarTarefas() {
    console.clear();
    tarefas.forEach((tarefa, index) => {
        console.log('${index + 1}. ${tarefa.texto} ${tarefa.concluida ? "(Concluída)" : "(Pendente)"}');
    });
}

// Função para marcar uma tarefa como concluída
function marcarComoConcluida() {
    const indice = prompt("Digite o número da tarefa para marcar como concluída:");

    if (indice >= 1 && indice <= tarefas.length) {
        tarefas[indice - 1].concluida = true;
        console.log("Tarefa marcada como concluída!");
    } else {
        console.log("Índice inválido! Tente novamente.");
    }

    listarTarefas();  // Atualiza a lista após a modificação
}

// Exemplo de uso: adicionando algumas tarefas
adicionarTarefa("Limpar a casa");
adicionarTarefa("Estudar para o exame de matemática");
adicionarTarefa("Fazer compras");

// Listar as tarefas iniciais
listarTarefas();

// O usuário pode marcar uma tarefa como concluída
marcarComoConcluida();