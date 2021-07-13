import React, { Component } from 'react'

import { nanoid } from 'nanoid'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import List from '../List/List'
import './Index.css'

export default class Index extends Component {
  state = {
    todos: [
      { id: 1, name: '吃饭', done: true },
      { id: 2, name: '睡觉', done: true },
      { id: 3, name: '打豆豆', done: false }
    ]
  }

  addTodo = state => {
    const { todos } = this.state
    const newTodos = [{
      id: nanoid(),
      name: state,
      done: false
    }, ...todos]

    this.setState({ todos: newTodos })
  }


  changeTodo = (id, done) => {
    const { todos } = this.state

    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done }
      }
      return todo
    })

    this.setState({ todos: newTodos })
  }

  delTodo = id => {
    const { todos } = this.state

    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({ todos: newTodos })
  }

  delAllDoneTodo = () => {
    const { todos } = this.state

    const newTodos = todos.filter(todo => {
      if (todo.done) {
        return false
      }
      return true
    })

    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo_wrap">
        <Header addTodo={this.addTodo} />
        <List todos={todos} changeTodo={this.changeTodo} delTodo={this.delTodo} />
        <Footer delAllDoneTodo={this.delAllDoneTodo}/>
      </div>
    )
  }
}