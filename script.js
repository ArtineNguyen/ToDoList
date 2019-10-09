let  masterTodoList = [];

function addTodo() {
    const item = document.getElementById ('thingsTodo').value;
    masterTodoList.push(
        {text: item,
        isDone: false,
        });
    document.getElementById('thingsTodo').value='';
    renderTodos();
}

function renderTodos (status) {
    let fillter;
    if (status==='done') fillter = masterTodoList.filter(doneButton => doneButton.isDone)
    else if (status==='undone') fillter = masterTodoList.filter(doneButton => !(doneButton.isDone))
    else fillter = masterTodoList;
    const html = fillter.map((item,i)=>{
        return `<li onclick ='onToggle(${i})' class='${item.isDone ? 'done':'undone'}'>${masterTodoList[i].text}<a href='#' onclick='remove(${i})'>x</a></li>\n`;
    })

    document.getElementById('result').innerHTML = html;
}
function remove (i){
    masterTodoList.splice(i,1);
    renderTodos();
}
const onToggle = (idx) => {
    masterTodoList[idx].isDone = !masterTodoList[idx].isDone
    renderTodos()
}