import React, { Component } from 'react';
import '../app/css/todoItem.css';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete () {
    this.props.onDelete(this.props.item);
  }

  render () {
    return (
      <div>
        <li className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </li>
      </div>
    );
  }
}

export default TodoItem;