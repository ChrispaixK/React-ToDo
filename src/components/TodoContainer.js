import React from "react";
import TodoList from "./TodoList";

class TodoContainer extends React.Component {
    state = {
        todos : [
            {
                id: 1,
                title: "Seetup development environment",
                completed: false
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed : false
            },
            {
                id: 3,
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
    // the render below is a component render differently to the render called in index.js
    //it takes no argument and and does not directly interact with the browser
    //It focuses on returning the corresponding React elements for that component
    render() {
        return (
           <div>
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