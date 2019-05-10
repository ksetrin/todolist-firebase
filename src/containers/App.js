import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  todoFetchAction,
  todoAddAction,
  todoDeleteAction
} from '../store/actions'
import { todoListSelector } from '../store/todo/selectors'
import ToDoList from '../components/ToDoList'
import ToDoAdd from '../components/ToDoAdd'

class App extends React.Component {

  componentDidMount = () => {
    const { todoFetchAction } = this.props
    todoFetchAction()
  }

  handleAddTodo = async (data) => {
    const { todoAddAction } = this.props
    await todoAddAction(data)
  }

  handleDeleteTodo = async (data) => {
    const { todoDeleteAction } = this.props
    await todoDeleteAction(data)
  }

  render () {
    const { todoList } =  this.props

    console.log('todoList', todoList)
    // console.log('todoList', {})
    // if ()
    // const ccdc = {aa: '111', bb: '222'}
    // ccdc.map((iii) => console.log('todoList 1', iii))

    return (
      <div className="App">
        <ToDoList todoList={todoList} onDeleteTodo={this.handleDeleteTodo} />
        <ToDoAdd onAdd={this.handleAddTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: todoListSelector()(state),
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  todoFetchAction,
  todoAddAction,
  todoDeleteAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
