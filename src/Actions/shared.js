
import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receive_data (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(receive_data(todos, goals))
    })
  }
}