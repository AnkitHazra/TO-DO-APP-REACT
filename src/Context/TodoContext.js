import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"New Task",
            completed: false,
        }
    ],
    addTodo: (todo) => {  },
    updateTodo:(id,todo ) => {  },
    deleteTodo:(id ) => {  },
    toggeleComplete:(id) => {  }
})

export const useTodo=() => { 
    return useContext(TodoContext)
 }

 export const TodoProvider=TodoContext.Provider