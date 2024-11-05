'use client'
import { create } from "zustand";
import { getToDos } from "../services/todoActions";



export const useTodoStore = create<ToDoStore>((set) => ({
  todos: [],
  todoCnt: 0,

  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    })),

  addTodo: (todo: todo) =>
    set((state) => {
      const newId = state.todoCnt + 1; 
      return {
        todos: [...state.todos, { ...todo, id: newId }], 
        todoCnt: newId, 
      };
    })
  ,
  loadTodos: async () => {
    const fetchedTodos = await getToDos();
    set({ todos: fetchedTodos, todoCnt: fetchedTodos.length });
  },

  deleteTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter(item => item.id !== id), // Remove the todo with the given id
    })),

  editTodo: (id: number, updatedTodo: todo) =>
    set((state) => ({
      todos: state.todos.map(item =>
        item.id === id ? { ...item, ...updatedTodo } : item // Update the todo with the given id
      )
    })),

}))