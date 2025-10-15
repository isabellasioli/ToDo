// -------------------------------------------------------
// 1. VARIÁVEL GLOBAIS 
// São acessíveis à partir de qualquer função JavaScript
// -------------------------------------------------------

// Procura pelo elemento com o ID abaixo no documento HTML
const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
// Procura pelo elemento com o ID abaixo no documento HTML
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
// Procura pelo elemento com o ID abaixo no documento HTML
const lista_tarefas = document.querySelector("#lista-tarefas");

// -------------------------------------------------------
// 2. FUNÇÕES DE LÓGICA 
// -------------------------------------------------------

function iniciaToDO() {
    // Associa função ao evento de clicar no botão "Adicionar nova tarefa"
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
}

function adicionarTarefa() {
    alert("ola tarefa")
}

// -------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO 
// -------------------------------------------------------

iniciaToDO();