import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {

  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  changeTodo = id => {
    return event => {
      this.props.changeTodo(id, event.target.checked)
    }
  }

  delTodo = id => {
    return () => {
      if (window.confirm('确认删除吗')) {
        this.props.delTodo(id)
      }
    }
  }

  state = {
    mouse: false
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state

    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.changeTodo(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn_danger" style={{ display: mouse ? 'block' : 'none' }} onClick={this.delTodo(id)}>删除</button>
      </li>
    )
  }
}