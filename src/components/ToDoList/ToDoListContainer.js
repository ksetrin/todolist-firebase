import React from 'react'
import PropTypes from 'prop-types'
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
import ToDoList from './ToDoList'
import ToDoAdd from './ToDoListAdd'

class ToDoListContainer extends React.Component {

  static propTypes = {
    store: PropTypes.shape({
      firestore: PropTypes.object
    })
  }

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
    const { todoList, todoUpdateAction } = this.props
    const todoListNew = todoList.map((item) => (
      item.id === todo.id
        ? {
          ...item,
          done: event.target.checked
        }
        : item
    ))
    console.log('todoListNew', todoListNew)
    await todoUpdateAction(todoListNew)
  }

  render () {
    const { todoList } = this.props
    return (
      <div>
        <ToDoAdd onAdd={this.handleAddTodo} />
        <ToDoList
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
