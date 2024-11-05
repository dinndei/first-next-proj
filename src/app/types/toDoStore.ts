
interface ToDoStore {
  todos: todo[];
  todoCnt: number;
  toggleTodo: (id: number) => void;
  addTodo: (todo: todo) => void;
  loadTodos: () => void;
  deleteTodo: (id:number)=>void;
  editTodo: (id:number,updatedTodo:todo)=>void;
}