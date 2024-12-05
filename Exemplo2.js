let tarefas = [];

// Função para adicionar tarefa
function adicionarTarefa(texto) {
    tarefas.push({ texto, concluida: false });
    mostrarTarefas();
}

// Função para marcar tarefa como concluída
function marcarComoConcluida(indice) {
    if (tarefas[indice]) {
        tarefas[indice].concluida = true;
    }
    mostrarTarefas();
}

// Função para editar tarefa
function editarTarefa(indice, novoTexto) {
    if (tarefas[indice]) {
        tarefas[indice].texto = novoTexto;
    }
    mostrarTarefas();
}

// Função para remover tarefa
function removerTarefa(indice) {
    tarefas.splice(indice, 1);
    mostrarTarefas();
}

// Função para mostrar todas as tarefas
function mostrarTarefas() {
    console.clear();
    tarefas.forEach((tarefa, index) => {
        console.log('${index + 1}. ${tarefa.texto} - ${tarefa.concluida ? "Concluída" : "Pendente"}');
    });
}

// Testando as funções
adicionarTarefa("Limpar a casa");
adicionarTarefa("Estudar para a prova");
adicionarTarefa("Comprar comida");

mostrarTarefas(); // Mostra todas as tarefas

marcarComoConcluida(0); // Marca a primeira tarefa como concluída
editarTarefa(1, "Estudar para o teste de matemática"); // Edita a segunda tarefa
removerTarefa(2); // Remove a terceira tarefa

mostrarTarefas(); // Mostra as tarefas após as modificações