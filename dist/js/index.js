"use strict";
let tarefa = document.getElementById('floatingInput');
let lista = document.getElementById('glass');
console.log(typeof (tarefa));
function adicionar() {
    if (!tarefa.value) {
        console.log(tarefa.value);
    }
    else {
        let item = document.createElement('li');
        let texto = document.createTextNode(tarefa.value);
        item.appendChild(texto);
        lista.appendChild(item);
        tarefa.value = '';
    }
}
