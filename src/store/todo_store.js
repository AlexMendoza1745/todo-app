import {TodoModel} from '../todo/model/todo';
//////////////
const filters={
  All: 'All',
  Completed: 'Completed',
  Pending: 'Pending'
}
/////////////
const state={
    todos:[
        new TodoModel('Piedra del alma'),
        new TodoModel('piedra 2'),
        new TodoModel('piedra 3'),
        new TodoModel('piedra 4')
    ],
    filter:filters.All
}
/////////////
const initStore =()=>{
   loadStore();
    console.log('Init store')
}
////////////
const loadStore=()=>{
    if(!localStorage.getItem('state')) return;
const {todos=[],filter=filters.All}=JSON.parse( localStorage.getItem('state'));
state.todos=todos;
state.filter=filter;

}

const saveLocalStorage=()=>{
    let json=JSON.stringify(state);
    localStorage.setItem('state',json);
}
////////////
const getTodo=(filter=filters.All)=>{
switch(filter){
case filters.All:
    //retornamos un arreglo mediente el operador spread
    
    return [...state.todos];

    case filters.Completed:
        return state.todos.filter(TodoModel=> TodoModel.done===true);

        case filters.Pending:
            return  state.todos.filter(TodoModel=> TodoModel.done===false);

            default:
                throw new Error(`${filters} no valido`);

}
}
//////////////////
const addTodo =(descripcion)=>{
    state.todos.push(new TodoModel(descripcion));
    saveLocalStorage();

}
///////////////////
const toggleTodo=(todoId)=>{
    state.todos=state.todos.map( todo=>{
        if(todo.id===todoId){
            todo.done= !todo.done;
        }
        return todo;
    }
      
    );
    saveLocalStorage();

}
////////////////
const deleteTodo=(todoId)=>{
    state.todos=state.todos.filter(TodoModel => TodoModel.id!==todoId);
    saveLocalStorage();

   
}
///////////////
const deleteComplete=()=>{
    state.todos=state.todos.filter(TodoModel => !TodoModel.done);
    saveLocalStorage();
}
/////////////
const setFilter=(newFilter=filters.All)=>{
state.filter=newFilter;
}
///////////
const getCurrentFilter=()=>{
 return state.filter;
}
///////////
export default {
initStore,
loadStore,
addTodo,
toggleTodo,
deleteTodo,
deleteComplete,
setFilter,
getCurrentFilter,
getTodo,
filters

};
