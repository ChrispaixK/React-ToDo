import React from "react";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    state = {
        todos : [
            {
                id: uuidv4(),
                title: "Seetup development environment",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed : false
            },
            {
                id: uuidv4(),
                title : "Deploy to live server",
                completed: false
            }
        ]
    }
    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                return { ...todo,completed: !todo.completed}
              }
              return todo
            }),
          }))
    }
    delTodo = id => {
        this.setState({
            todos: [
              ...this.state.todos.filter(todo => {
                return todo.id !== id;
              })
            ]
          });
      };
      addTodoItem = title => {
        const newTodo = {
            id: 4,
            title: title,
            completed: false
          };
          this.setState({
            todos: [...this.state.todos, newTodo]
          });
      };
    // the render below is a component render differently to the render called in index.js
    //it takes no argument and and does not directly interact with the browser
    //It focuses on returning the corresponding React elements for that component
    render() {
        return (
           <div>
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodoList 
            todos={this.state.todos} 
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            />
           </div>
        )
    }
}

export default TodoContainer