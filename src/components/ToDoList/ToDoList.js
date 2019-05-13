import React from 'react'
import {SortableContainer} from 'react-sortable-hoc';
import SortableItem from './ToDoListItem'

class ToDoList extends React.Component {
  render () {
    const { items, onDelete, onDone } = this.props
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem
            key={value.id}
            index={index}
            value={value}
            onDelete={onDelete}
            onDone={onDone}
          />
        ))}
      </ul>
    )
  }
}
export default SortableContainer(ToDoList)
