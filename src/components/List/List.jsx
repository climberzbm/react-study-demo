import React, { Component } from 'react'
import Item from './Item/Item'
import './List.css'

export default class List extends Component {
  render() {
    const { todos, changeTodo, delTodo } = this.props

    return (
      <ul className="todo_main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} changeTodo={changeTodo} delTodo={delTodo}/>
          })
        }
      </ul>
    )
  }
}