import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  checkAll = event => {
    this.props.checkAll(event.target.checked)
  }

  render() {
    const { delAllDoneTodo, todos } = this.props

    let total = todos.length
    let doneTodoNum = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    return (
      <div className="todo_footer">
        <label>
          <input type="checkbox" checked={total === doneTodoNum && total !== 0} onChange={this.checkAll} />
        </label>
        <span>
          已完成{doneTodoNum}/{total}
        </span>
        <button className="btn btn_danger" onClick={delAllDoneTodo}>清除已完成任务</button>
      </div>
    )
  }
}