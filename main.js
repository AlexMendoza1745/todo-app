import './style.css'
import {App} from './src/todo/app';
import todo_store from './src/store/todo_store';

todo_store.initStore();
App("#app");
