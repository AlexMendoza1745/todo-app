
export const createTodo =(todo)=>{
    const {done,descripcion,id}=todo;
   const html=`
    <div class="view">
        <input class="toggle" type="checkbox" ${done ? 'check': 'unfalse'}>
        <label>${descripcion}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`

    const liElement=document.createElement('li');
    liElement.innerHTML=html;
    liElement.setAttribute('data-id', id);
    if(done){
        liElement.classList.add('completed');
    }
    
    return liElement;
}
