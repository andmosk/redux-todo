/**
 * Created by andriy.moskaliuk on 07.06.2017.
 */
const initialState = {
    todos: [{id: 1, text: '1'}, {id: 2, text: '2'}, {id: 3, text: '3'}, {id: 4, text: '4'}],
};

export default function (state = initialState, action) {

    const {type, id, text} = action;

    switch (type) {
        case 'REMOVE_TODO':
            return {...state, todos: state.todos.filter(t => t.id !== id)};
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, {id, text}]};
    }

    return state;
}

