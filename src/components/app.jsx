import React from 'react';
import TodoForm from './todoForm.jsx';
import Title from './title.jsx';
import List from './list.jsx';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from './../actions/index'


 class App extends React.Component {


    render() {
        const {todos, onRemove, onAdd} = this.props;

        return (
            <div  className="col-md-8 col-md-offset-2">
                <Title todoCount={todos.length}/>
                <TodoForm addTodo={onAdd}/>
                <List todos={todos} remove={onRemove} />
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { todos: state.todos }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        },
        onRemove: (id) => {
            dispatch(removeTodo(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
