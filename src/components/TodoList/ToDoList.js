import React from 'react'
import {SortableContainer} from 'react-sortable-hoc';
import SortableItem from './ToDoListItem'

class ToDoList extends React.PureComponent {
  // static propTypes = {
  //   children: PropTypes.node,
  // }

  render () {
    const { items, onDelete } = this.props
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem
            key={value.key}
            index={index}
            value={value}
            onDelete={onDelete}
          />
        ))}
      </ul>
    )
  }
}
export default SortableContainer(ToDoList)
