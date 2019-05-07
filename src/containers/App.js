import React from 'react';
import { connect } from 'react-redux'
import TodoList from '../components/TodoList';


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
        <TodoList todo={todo} />
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
