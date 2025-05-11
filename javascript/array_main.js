const todoList = [
    {name:'sfasdf', date: '03/05/2024'}, 
    {name:'asdasdasf', date:'04/05/2024'}
];

printList(todoList);

/*
    Add todo work in to array
*/
function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateElement = document.querySelector('.js-date');
    const date = dateElement.value;
    if(name != '' && date!= ''){
    todoList.push({name, date});
    console.log(todoList);
    inputElement.value = '';
    dateElement.value = '';
    printList(todoList);
    }else alert("You must input all information");
}

/*
    print array
*/
function printList(todoList){

    let todoHTML = '';

    for(i = 0; i<todoList.length; i++){
        const todo = todoList[i];
        const {name,date} = todo;
        const html = `
            <div>${name}</div>
            <div>${date}</div>
            <button onclick="
            todoList.splice(${i},1);
            printList(todoList)
            " class ="delete-button" >Delete</button>
        `;
        todoHTML += html;
    }
    console.log(todoHTML);
    document.querySelector('.work-list').innerHTML = todoHTML;
}

// Enter 
function enter(event){
    if(event.key === 'Enter'){
        addTodo();
    }
}