import React from "react";

function CreateToDo(props) {
  return (
    <div className="inputButton">
      <input
        className="todoInput"
        id="todo"
        value={props.value} 
        placeholder="To-Do..."
        onChange={props.onChange}
      ></input>
      <button className="todoButton" onClick={props.onClick}>
        Create
      </button>
    </div>
  );
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      todoList: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleClick = () => {
    const newTodoList = [...this.state.todoList, this.state.inputValue];
    this.setState({
      todoList: newTodoList,
      inputValue: "",
    });
  };

  render() {
    return (
      <div className="todo-container">
        <CreateToDo
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onClick={this.handleClick}/>
        <div className="todoList">
          <div className="Tasks">Tasks</div>
          {this.state.todoList.map((task, index) =>(
          <div className="task" key={index}>{index + 1}: {task}</div>
          ))}
        </div>
      </div>    
    );
  }
}
export default Todo;
