import React from 'react';

class ListItem extends React.Component {
  render() {
    return (
      <div className="ListItem">
        <p className="ListItem__text">{this.props.todo}Poopoo</p>
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
  render() {

  }
}

class Toolbar extends React.Component {
  
  render() {
    return (
      <div className="Toolbar">
        <button className="Toolbar__create">Create item</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <ListItem />
      </div>
    )
  }
}

export default App;