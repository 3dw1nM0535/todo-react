import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../components/TodoItem';
import '../app/css/index.css';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ['Wash utensils', 'Prepare supper', 'Time for dinner', 'Practice coding'],
      isToggleOn: true
    };

    this.onDelete = this.onDelete.bind(this);

  }

  onDelete (item) {
    var updatedTodos = this.state.todos.filter((val, index) => {
      return item !== val;
    });

    this.setState({
      todos: updatedTodos
    });
  }


  render () {
    
    var todos = this.state.todos;
    var todo = todos.map((item, i) => {
    return (
      <TodoItem item={item} key={i} onDelete={this.onDelete} />
      );
    }) 

    return (
      <div className="todo-list">
        <p>The busiest people have the most leisure time...</p>
        <ul>
          {todo}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById('todo-wrapper'));