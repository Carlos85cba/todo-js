import './styles.css';
import {Todo,TodoList} from './classes'
import {crearTodoHtml} from './js/componentes'


export const todoList = new TodoList();
/* const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);
//tarea.completado=true;

console.log(todoList);
crearTodoHtml(tarea); */
/* 

localStorage.setItem('mi-key','ABC123'); //no se borra
sessionStorage.setItem('mi-key','ABC123'); // se borra cuando se cierra el navagador */

/* todoList.todos.forEach(todo =>  crearTodoHtml(todo)); */
todoList.todos.forEach(crearTodoHtml);
todoList.todos[0].imprimirClase();