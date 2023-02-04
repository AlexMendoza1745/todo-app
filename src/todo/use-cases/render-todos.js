
import { createTodo } from './todo-create';
export {createTodo} from './todo-create';
let element;
/**
 * 
 * @param {String} ElementHTML 
 * @param {Todo} todos 
 */
export const RenderTodos=(ElementHTML, todos=[])=>{

   if(!element){
      element=document.querySelector(ElementHTML);
   }
      
   if(!element) throw new Error ("No existe el elemento");
   element.innerHTML='';
   todos.forEach(todo => {
      element.append(createTodo(todo));
   });



}