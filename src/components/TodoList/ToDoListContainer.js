import React from 'react'
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {
  todoAddAction,
  todoUpdateAction,
  todoDeleteAction
} from '../../store/actions'
import { todoListSelector } from '../../store/todo/selectors'
import SortableList from './ToDoList'
import ToDoAdd from './ToDoListAdd'

class ToDoListContainer extends React.PureComponent {
  // static propTypes = {
  //   children: PropTypes.node,
  // }

  reorderArray = (todoList, oldIndex, newIndex) => {
    const sortedTodoList = todoList.slice()
    sortedTodoList.splice(
      newIndex < 0
        ? sortedTodoList.length + newIndex
        : newIndex,
      0,
      sortedTodoList.splice(oldIndex, 1)[0]
    )
    return sortedTodoList
  }

  onSortEnd = async ({oldIndex, newIndex}) => {
    const {todoList, todoUpdateAction} = this.props
    const orderedTodoList = this.reorderArray(todoList, oldIndex, newIndex)
    await todoUpdateAction(orderedTodoList)
  };

  handleAddTodo = async (text) => {
    const { todoAddAction } = this.props
    await todoAddAction({
      text,
      id: uuidv4(),
      done: false
    })
  }

  handleDeleteTodo = (todo) => async () => {
    const { todoDeleteAction } = this.props
    await todoDeleteAction(todo)
  }

  handleDoneTodo = (todo) => async (event) => {
    todo.done = event.target.checked
    const { todoList, todoUpdateAction } = this.props
    console.log('todoList', todoList)
    await todoUpdateAction(todoList)
  }

  render () {
    const { todoList } = this.props
    return (
      <div>
        <ToDoAdd onAdd={this.handleAddTodo} />
        <SortableList
          items={todoList}
          onDelete={this.handleDeleteTodo}
          onDone={this.handleDoneTodo}
          onSortEnd={this.onSortEnd}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    todoList: todoListSelector()(state),
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  todoAddAction,
  todoUpdateAction,
  todoDeleteAction
}, dispatch)

export default compose(
  firestoreConnect([
    { collection: 'todo'}
  ]),
  connect(mapStateToProps, mapDispatchToProps),
)(ToDoListContainer)
