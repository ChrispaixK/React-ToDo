import React from "react";

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
    // the render below is a component render differently to the render called in index.js
    //it takes no argument and and does not directly interact with the browser
    //It focuses on returning the corresponding React elements for that component
    render() {
        return (
            <div> 
                <h1>Hello from Create React App</h1>
                <p>I am in a React Component</p>
                <div>
                    <p>I am in a Random nested div</p>
                </div>
            </div>
        )
    }
}

export default TodoContainer