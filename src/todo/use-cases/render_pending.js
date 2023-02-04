import todo_store from "../../store/todo_store";

let element='';
export const renderPending =(ElementId)=>{
if(!element){
    element=document.querySelector(ElementId);
}

if(!element) throw new Error (`elemento ${element} no encontrado `);

//regresamos 
element.innerHTML=todo_store.getTodo('Pending').length;
console.log(element);

}