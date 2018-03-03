import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormClearOnSubmit extends Component {
  state = {}
  handleChange = (e, { todo, value }) => this.setState({ [todo]: value })
  handleSubmit = () => this.setState({ todo: ''})
  render() {
    const { todo } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input placeholder='Todo task' name='todo' value={todo} onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}

export default FormClearOnSubmit
