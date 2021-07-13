import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    const { delAllDoneTodo } = this.props

    return (
      <div className="todo_footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          已完成0/3
        </span>
        <button className="btn btn_danger" onClick={delAllDoneTodo}>清除已完成任务</button>
      </div>
    )
  }
}