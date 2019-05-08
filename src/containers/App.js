import React from 'react'
import { connect } from 'react-redux'
import ToDoList from '../components/ToDoList'
import ToDoAdd from '../components/ToDoAdd'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {
        isOpen: false,
      },
      create: {
        completed: false,
        isOpen: false,
      },
    }
  }


  render () {
    const { todo } =  this.props
    return (
      <div className="App">
        <ToDoList todo={todo} />
        <ToDoAdd todo={todo} />
      </div>
    );
  }




}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
