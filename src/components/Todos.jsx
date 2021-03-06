import React from 'react'
import 'bulma/css/bulma.css'
import './todoitems.css'

import TodoItems from '../views/TodoItems'




class Todos extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

    }

    //detect changement of input text
    handleChange(e){
        this.setState({text : e.target.value})

    }

    //add new todo in state
    addTodo(e){
        e.preventDefault();
        let addNewTodo = {
            text : this.state.text,
            id: Date.now()
        }
        this.setState((state) =>({todos: state.todos.concat(addNewTodo),text: ''}))
    }



    render(){
        return(
         <div className="field">
            <p>Todos Components</p>
            <TodoItems todo={this.state.todos}/>
            <input className="input" type="text" onChange={this.handleChange} value={this.state.text}/>
            <button className="button is-primary" onClick={this.addTodo}>Add new</button>
         </div>
        )
    }
}


export default Todos