let tarefa:any = document.getElementById('floatingInput')
let lista:any = document.getElementById('glass')

console.log(typeof(tarefa))

function adicionar():void {
    if(!tarefa.value) {
        console.log(tarefa.value)
    } else {
        let item:any = document.createElement('li')
        let texto:any = document.createTextNode(tarefa.value)
        item.appendChild(texto)
        lista.appendChild(item)
        tarefa.value = ''
    }
}