/**
 * Created by andriy.moskaliuk on 08.06.2017.
 */
let nextTodoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    }
};