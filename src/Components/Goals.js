
import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleRemoveGoal
} from '../Actions/goals'

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ))
  }
  removeItem = (goal) => {
    this.props.dispatch(handleRemoveGoal(goal))
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goal</button>

        <List
          items={this.props.goals}
          remove={this.removeItem}
        />
      </div>
    )
  }
}
const mapStateToProps=(state) => ({
  goals: state.goals
})
export default connect(mapStateToProps)(Goals) 