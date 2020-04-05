export const ADD_TODO = 'ADD_TODO';

export function addTodo(item){
    return { type: ADD_TODO, item }
}