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

  handleSubmit = (event) => {
    event.preventDefault()
    const {onAdd} = this.props
    onAdd(this.state.text)
    this.setState({text: ''})
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          {/*<label>*/}
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          {/*</label>*/}
          <input type="submit" value="ADD" />
        </div>
      </form>
    )
  }
}
export default ToDoAdd
