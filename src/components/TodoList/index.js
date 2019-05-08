import React from 'react'

class ToDoList extends React.PureComponent {
  // static propTypes = {
  //   children: PropTypes.node,
  // }

  // add

  render () {
    return (
      <ul>
        {this.props.todo.map((item) => (
          <li
            // onClick={onClick}
            style={{
              // textDecoration: completed ? 'line-through' : 'none'
            }}
          >
            {/*{text}*/}
            {item.text}
          </li>
        ))}

      </ul>
    )
  }
}
export default ToDoList
