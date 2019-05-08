import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { todoAddAction } from '../store/actions'
import ToDoList from '../components/ToDoList'
import ToDoAdd from '../components/ToDoAdd'


class App extends React.Component {

  handleAddTodo = async (data) => {
    const { todoAddAction } = this.props
    await todoAddAction({text: data})
  }

  render () {
    const { todo } =  this.props
    return (
      <div className="App">
        <ToDoList todo={todo} />
        <ToDoAdd onAdd={this.handleAddTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  todoAddAction,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
