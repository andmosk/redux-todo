import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"  className="form-control col-md-12" value={this.state.value} onChange={this.handleChange} />
                <br/>
            </form>
        );
    }
}
