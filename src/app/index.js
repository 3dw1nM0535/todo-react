import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../components/TodoItem';
import AddItem from '../components/addItem';
import About from '../components/About';
import '../app/css/index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={Todo}></Route>
          <Route path={'/about'} component={About}></Route>
        </div>
      </Router>
    );
  }
}

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: ['Wash utensils', 'Prepare supper', 'Time for dinner', 'Practice coding'],
      isToggleOn: true
    };

    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);

  }

  onDelete (item) {
    var updatedTodos = this.state.todos.filter((val, index) => {
      return item !== val;
    });

    this.setState({
      todos: updatedTodos
    });
  }

  onAdd (item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
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
        <Link to={'/about'}>About</Link>
        <p>The busiest people have the most leisure time...</p>
        <ul>
          {todo}
        </ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));