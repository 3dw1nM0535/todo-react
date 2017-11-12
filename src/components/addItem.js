import React, { Component } from 'react';
import '../app/css/addItem.css';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = '';
  }

  render () {
    return (
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

export default AddItem;
