import html from './app.html?raw';
import todoStore from '../store/todo_store';
import {RenderTodos} from './use-cases/render-todos';
import { renderPending } from './use-cases/render_pending';


const ElementsHTML={
  TodoList: '.todo-list',
  newTodoInput: '#new-todo-input',
  deleteComplete: '.clear-completed',
  selectFilters: '.filtro',
  PendingCountId: '#pending-count'
}

 export const App=(ElementId)=>{

const updateCount =()=>{
renderPending(ElementsHTML.PendingCountId);
}

   const RenderTodo=()=>{
     const todos=todoStore.getTodo(todoStore.getCurrentFilter());
     RenderTodos(ElementsHTML.TodoList,todos);
     updateCount();
   }
  //llamanos el html
    (()=>{
 const app=document.createElement('div');
 app.innerHTML=html;
 document.querySelector(ElementId).append(app);
 RenderTodo();
    })();

    //referencias html 
    const newDescription =document.querySelector(ElementsHTML.newTodoInput);
    const todoClick= document.querySelector(ElementsHTML.TodoList);
    const clearComplete=document.querySelector(ElementsHTML.deleteComplete);
    const SelectFilters =document.querySelectorAll(ElementsHTML.selectFilters);
    //listeners
    //listener para escuchar cada que se tecle en el campo 
    newDescription.addEventListener('keyup', (event)=>{
      if(event.keyCode!==13) return;
      if(event.target.value.trim().length===0) return;
      todoStore.addTodo(event.target.value);
      RenderTodo();
      event.target.value='';
     

    });

    ////////////
    //listener para anadir un nuevo todo
    todoClick.addEventListener('click', (event)=>{
      const element =event.target.closest('[data-id]');
     todoStore.toggleTodo( element.getAttribute('data-id'));
   RenderTodo();
    });

    //listener para  eliminar un todo con el boton destroy
    
    todoClick.addEventListener('click',(event)=>{
        const elementD = event.target.closest('[data-id]');
        const isDestroy=event.target.className;
       if(!elementD || isDestroy!=='destroy') return;
        todoStore.deleteTodo(elementD.getAttribute('data-id'));
        RenderTodo();
    });
    
    //listener para  borrar completados
   clearComplete.addEventListener('click',(event)=>{
    todoStore.deleteComplete();
     RenderTodo();
   })

   SelectFilters.forEach(filter=>{
    filter.addEventListener('click',event =>{
      SelectFilters.forEach(element=>element.classList.remove('selected'))
      event.target.classList.add('selected');
      switch(event.target.text){
        case 'Todos':
         todoStore.setFilter(todoStore.filters.All);
          break;

          case 'Pendientes':
            todoStore.setFilter(todoStore.filters.Pending);
            break;

            case 'Completados':
              todoStore.setFilter(todoStore.filters.Completed);
              break;

              default:
                throw new Error('No valido');
      }
      RenderTodo();
    })
   })
   
}


