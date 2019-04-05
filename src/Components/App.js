import React, { Component } from 'react'
import Goals from './Goals'
import Todos from './Todos'
import { connect } from 'react-redux'
import { handleInitialData }  from '../Actions/shared'

class App extends Component {
  componentDidMount()
  {
    this.props.dispatch(handleInitialData())
  }
  render() {
       if (this.props.loading===true)
        {
          return <h1>Loading</h1>
        }
      return (
        <div>
          <Todos/>
          <Goals/>
        </div>
    )
  }
}
const mapStateToProps=(state)=>
({
  loading: state.loading
})
export default connect(mapStateToProps)(App)
