import React from 'react'
import {SortableElement} from 'react-sortable-hoc';

class ToDoListItem extends React.PureComponent {
  // static propTypes = {
  //   children: PropTypes.node,
  // }

  render () {
    const { value, onDelete } = this.props
    return (
      <li>
        <input type="checkbox" onClick={this.onClick}/>
        {value.text}
        <input type="button" value='delete' onClick={onDelete(value.key)}/>
      </li>
    )
  }
}
export default SortableElement(ToDoListItem)
