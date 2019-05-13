import React from 'react'
import {SortableElement} from 'react-sortable-hoc';

class ToDoListItem extends React.PureComponent {
  render () {
    const { value, onDelete, onDone } = this.props
    return (
      <li >
        <input className="done-btn" type="checkbox" onClick={onDone(value)} checked={value.done}/>
        <span className={value.done ? 'completed' : null}>{value.text}</span>
        <input className="delete-btn" type="button" value='delete' onClick={onDelete(value)}/>
      </li>
    )
  }
}
export default SortableElement(ToDoListItem)
