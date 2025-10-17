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

// Carrega o áudio e reproduz ao clicar no botão "Concluir" uma tarefa.
const audioConcluir = new Audio('sound/gmae.wav');
// Força o navegador a pré-gravar o áudio para evitar atrasos na reprodução.
audioConcluir.preload = "auto";

// Variável global que controla a exibição da modal "ExcluirTarefa".
const modalExcluir = new bootstrap.Modal(document.getElementById('exampleModal'));

// Variável global que armazena a tarefa que será exclída.
let id_tarefa_excluir;

// -------------------------------------------------------
// 2. FUNÇÕES DE LÓGICA 
// -------------------------------------------------------

function iniciaToDO() {
    // Associa função ao evento de clicar no botão "Adicionar nova tarefa".
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
    // Associa a função "adicionarTarefaEnter()" ao evento de clicar atecla "Enter" no campo de "Adicionar nova tarefa..."
    txt_nova_tarefa.addEventListener("keypress", adicionarTarefaEnter);
}

function adicionarTarefa() {
    // Se a caixa de texto não está vazia .trim() remove espaços em branco do começo e fim do valor do campo.
    if (txt_nova_tarefa.value.trim() !== "") {
        const btn_item = ` 
        <div>
            <button class="btn btn-sm me-2 btn-concluir" onclick="concluirTarefa(this)">Concluir</button>
            <button class="btn btn-sm btn-excluir" onclick="obterIDTarefaExcluir(this);modalExcluir.show()">Excluir</button>
        </div>
        `;

        // Cria um novo item a lista.
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        // Adiciona o texto digitado na caixa de texto e os botões para concluir e excluir a tarefa.
        // 75% vamos usar para a escrita, já os outros 25% serão usados para os botões.
        // "text-truncate" corta e adiciona reticências (três pontinhos ...) em nomes de tarefas que exedem os 75% do tamanho da linha.
        item.innerHTML = "<span class='w-75 text-truncate'>" + txt_nova_tarefa.value + "</span>" + btn_item;

        // Adiciona o item a lista de tarefas.
        lista_tarefas.appendChild(item);
    }
    // Limpa o campo de texto "Adicionar nova tarefa..." após o usuário adicionar a tarefa à lista.
    txt_nova_tarefa.value = "";
    // Seleciona o campo de "Adicionar nova tarefa..." após adicionar a tarefa na lista.
    txt_nova_tarefa.focus();
}
function adicionarTarefaEnter(evento) {
    // Se a tecla pressionada for igual a "Enter".
    if (evento.key == "Enter"){
        // Chama a função JavaScript "adicionarTarefa()".
        adicionarTarefa();
    };
}
function concluirTarefa(btn_concluir) {
    // Reproduz o áudio ao clicar no botão "Concluir".
    audioConcluir.play();

    // Joga os confettis na tela.
    for (let i = 0; i <= 50; i++) {
        confetti();
    }

    // Atualiza o ID da tarefa a ser exluída e passa como parâmetro o botão de "Concluir" clickado.
    obterIDTarefaExcluir(btn_concluir);

    // Chama a função JS "excluirTarefa()".
    excluirTarefa();

}

function excluirTarefa() {
    // Remove o item da lista de tarefa.
    lista_tarefas.removeChild(lista_tarefas.children[id_tarefa_excluir]);
    // Fecha o modal de "Excluir tarefa".
    modalExcluir.hide();
}

function obterIDTarefaExcluir(btn) {
    // Encontra o elemento HTML "li" (item) pai mais próximo do botão de "Concluir" clickado.
    // A função JS "obterIDTarefaExcluir()", o botão clickado é recebido como parâmetro da função.
    const item = btn.closest("li");
    const tarefas = Array.from(lista_tarefas.children);
    // Por exemplo, se temos 3 tarefas e excluímos a última tarefa, id_tarefa_excluir será definido para "3" que é o ID da tarefa exclída.
    id_tarefa_excluir = tarefas.indexOf(item);
}

// -------------------------------------------------------
// 3. ESCUTADORES DE EVENTOS E INÍCIO 
// -------------------------------------------------------

iniciaToDO();