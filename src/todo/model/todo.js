import { v4 as uuid } from 'uuid';
export class TodoModel{
   
    constructor(descripcion){
this.id=uuid();
this.descripcion=descripcion;
this.done=false;
this.createAt=new Date();
    }
}