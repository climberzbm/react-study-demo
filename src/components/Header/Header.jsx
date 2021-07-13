import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  handleKeyUP = event => {
    const { keyCode, target } = event
    if (keyCode !== 13) {
      return
    }
    if (!target.value.trim()) {
      alert('输入不能为空')
      return
    }
    this.props.addTodo(target.value)
    target.value = ''
  }

  render() {
    return (
      <div className="todo_header">
        <input type="text" placeholder="请输入" onKeyUp={this.handleKeyUP} />
      </div>
    )
  }
}