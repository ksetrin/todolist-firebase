import React from 'react'

class ToDoAdd extends React.PureComponent {
  // static propTypes = {
  //   children: PropTypes.node,
  // }

  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleSubmit = async (event) => {
    const {onAdd} = this.props
    await onAdd(this.state)
    this.setState({text: ''})
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default ToDoAdd
