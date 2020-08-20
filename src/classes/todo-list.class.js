import { Todo } from "./todo.class";


export class TodoList {
    constructor() {
        //        this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id); //regresa un nuevo arreglo excluyendo el que se le pasa por parametro
        this.guardarLocalStorage();
    }

    marcarCompletados(id) {
        for (const todo of this.todos) {
            console.log(id, todo.id)
            if (todo.id == id) { //Es igual igual porque uno es string y el otro numero
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
        }


    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));

    }
    cargarLocalStorage() {
        /*        if (localStorage.getItem('todo')) {
                   this.todos = JSON.parse(localStorage.getItem('todo'));
                   console.log('CargarLocal: ', this.todos);
               } else {
                   this.todos = [];
               } */

        //De forma ternaria
        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        this.todos = this.todos.map(obj =>Todo.fromJson(obj));
    }
}