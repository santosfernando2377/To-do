var tarefa = document.getElementById('floatingInput');
var lista = document.getElementById('glass');

function adicionar() {
    if (!tarefa.value) {
        console.log(tarefa.value);
    } else {
        let item = document.createElement('li');
        let texto = document.createTextNode(tarefa.value);
        item.appendChild(texto);
        lista.appendChild(item);
        tarefa.value = '';
    }
}