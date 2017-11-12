import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

  render () {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <h2>Todo App with CRUD functionality</h2>
      </div>
    );
  }
}

export default About;
