import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  todoFetchAction,
  todoAddAction,
  todoDeleteAction
} from '../../store/actions'
import { todoListSelector } from '../../store/todo/selectors'

import SortableList from './ToDoList'
import ToDoAdd from './ToDoListAdd'

class ToDoListContainer extends React.PureComponent {
  // static propTypes = {
  //   children: PropTypes.node,
  // }
  componentDidMount = () => {
    const { todoFetchAction } = this.props
    todoFetchAction()
  }

  handleSortEnd = (items, oldIndex, newIndex) => {
    // console.log('items', items)
    // console.log('oldIndex', oldIndex)
    // console.log('newIndex', newIndex)
    // return items
  }

  // const reorderArray = (event, originalArray) => {
  //   const movedItem = originalArray.find((item, index) => index === event.oldIndex);
  //   const remainingItems = originalArray.filter((item, index) => index !== event.oldIndex);
  //
  //   const reorderedItems = [
  //     ...remainingItems.slice(0, event.newIndex),
  //     movedItem,
  //     ...remainingItems.slice(event.newIndex)
  //   ];
  //
  //   return reorderedItems;
  // }

  // мне по сути не нужно сортировать массив как таковой
  // мне нужно обновить свойство order
  // когда я его обновлю, мне придут новые данные в нужной сортировке

  onSortEnd = ({oldIndex, newIndex}) => {

    console.log('oldIndex', oldIndex)
    console.log('newIndex', newIndex)


    const {todoList} = this.props
    const sortedTodoList = todoList.slice();

    console.log('todoList', todoList)

    const ccc = sortedTodoList.splice(
      newIndex < 0
        ? sortedTodoList.length + newIndex
        : newIndex,
      0,
      sortedTodoList.splice(oldIndex, 1)[0]
    );

    console.log('xxx', sortedTodoList)

    return ccc
    // this.setState(({items}) => ({
    //   items: this.handleSortEnd(items, oldIndex, newIndex),
    // }));
  };

  handleDelete = () => {
    console.log('handleDelete', )
  }

  handleAddTodo = async (text) => {
    const { todoAddAction, todoList } = this.props
    const lastToDo = todoList[todoList.length-1]
    await todoAddAction({
      text,
      order: +lastToDo.order + 1
    })
  }

  handleDeleteTodo = (todoID) => async () => {
    const { todoDeleteAction } = this.props
    await todoDeleteAction(todoID)
  }

  render () {
    const { todoList } = this.props

    console.log('todoList', todoList)
    console.log('todoList.length', todoList.length)

    const hightOrder = todoList[todoList.length-1]
    console.log('hightOrder', hightOrder)

    return (
      <div>
        <ToDoAdd onAdd={this.handleAddTodo} />
        <SortableList
          items={todoList}
          onDelete={this.handleDeleteTodo}
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
  todoFetchAction,
  todoAddAction,
  todoDeleteAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer)
