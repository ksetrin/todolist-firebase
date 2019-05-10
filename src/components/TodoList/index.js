import React from 'react'

class ToDoList extends React.PureComponent {
  // static propTypes = {
  //   children: PropTypes.node,
  // }

  draggedItem = null

  onDragStart = (todo) => (event) => {
    this.draggedItem = todo
    // console.log('event', event)
    // console.log('todo', todo)
  }

  onDragOver = (todo) => (event) => {
    // this.draggedItem = todo
    // console.log('event', event)
    console.log('todo', todo.key)
  }

  onDragEnd = () => {
    this.draggedItem = null
  }

  onClick = () => {

  }

  render () {
    // console.log(this.props.todoList)
    return (
      <ul>
        {this.props.todoList.map((item) => (
          <li
            key={item.key}
            style={{ height: 30 }}

            draggable
            onDragStart={this.onDragStart(item)}
            onDragOver={this.onDragOver(item)}
            onDragEnd={this.onDragEnd}
          >
            <input type="checkbox" onClick={this.onClick}/>
            {item.text}
          </li>
        ))}

      </ul>
    )
  }
}
export default ToDoList
