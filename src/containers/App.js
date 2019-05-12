import React from 'react'

import ToDoList from '../components/ToDoList'


class App extends React.Component {





  render () {
    const { todoList } =  this.props

    console.log('todoList', todoList)
    // console.log('todoList', {})
    // if ()
    // const ccdc = {aa: '111', bb: '222'}
    // ccdc.map((iii) => console.log('todoList 1', iii))

    return (
      <div className="container">
        <ToDoList />
      </div>
    );
  }
}


export default App
