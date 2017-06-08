import React from 'react';

const Todo = ({todo, remove}) =>
    (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);

const List = ({todos, remove}) => {

    let allTodos = [];
    let i = 1;

    if(todos.length > 0) {
        allTodos = todos.map(todo => {
            return (<Todo todo={todo} key={i++} remove={remove} />);
        });
    } else {
        allTodos.push(<h3 id="acu" key="0">All caught up !</h3>);
    }

    return (
        <div id="list" className="list-group" style={{marginTop:'30px'}}>
            {allTodos}
        </div>
    );
};

export default List;