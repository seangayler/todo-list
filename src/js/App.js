import React from 'react';
import ReactDOM from 'react-dom';

class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem">
        <p className="ListItem__text">{this.props.text}</p>
        <button className="ListItem__delete" onClick={this.handleClick}>&#10008;</button>
      </div>
    )
  }

  handleClick(e) {
    let listItem = e.target.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
}

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    if (this.props.formDisplayed) {
      return (
        <div className="CreateForm-container">
          <form className='CreateForm' onSubmit={this.handleSubmit}>
            <label>
              Todo: <br />
              <textarea type="text" name="todo" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Add" onClick={this.handleSubmit}/>
          </form>
          <button className="CreateForm-close">&#10008;</button>
        </div>
      )
    }
    else {
      return <span></span>
    }
  }

  handleChange(event) {
    this.setState({todo: event.target.value})
  }

  handleSubmit(event) {
    this.props.hideForm();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ""});
  }
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplayed: false
    }
    this.displayForm = this.displayForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  render() {
    return (
      <div className="Toolbar">
        <CreateForm formDisplayed={this.state.formDisplayed} hideForm={this.hideForm} addTodo={this.props.addTodo}/>
        <button className="Toolbar__create" onClick={this.displayForm}>Create item</button>
      </div>
    )
  }

  displayForm() {
    this.setState({ formDisplayed: true });
  }

  hideForm() {
    this.setState({ formDisplayed: false});
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
  }
  
  render() {
    return (
      <div className="App">
        <Toolbar addTodo={this.addTodo} />
        <div>
          { this.state.todos.map((todo, index) => (<ListItem text={todo} key={index} />)) }
        </div>
      </div>
    )
  }

  addTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) });
  }
}

export default App;