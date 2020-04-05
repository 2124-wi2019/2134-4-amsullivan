/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    4/4/2020
*/
window.addEventListener('load', ()=> {
    const todoList = [];
    const actionDisplayList = document.getElementById("actionDisplayList");
    const actionAddListItem = document.getElementById("actionAddListItem");
    const actionPrintList = document.getElementById("actionPrintList");
    const listHolder = document.getElementById("listHolder");
    
    actionDisplayList.addEventListener('click', ()=>{
        todoList.push("Wash car");
        todoList.push("Wash dog");
        todoList.push("Get groceries");
        todoList.push("Do INFO 2134 homework");
        rebuildList(todoList);

    });
    actionAddListItem.addEventListener('click', ()=> {
        let newItem = prompt("Please enter a new list item");
        todoList.push(newItem);
        rebuildList(todoList);
    });
    actionPrintList.addEventListener('click', ()=>{
        printToDoList();
    });

    function rebuildList(listItems) {
        listHolder.innerHTML = '';
        //remove = from <= to fix undefined item
        for(let i = 0; i < listItems.length; i++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = listItems[i];
            listHolder.appendChild(listItem);
        }
    }
//try-catch structure
    try {
        printToDoList(); //wrap call of printToDoList()
    } catch (ex) {
        console.log('printToDoList() has not been implemented yet.'); //output to console an error message saying printToDoList() not implemented
    }

});

