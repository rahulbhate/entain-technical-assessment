import * as types from 'redux/actions/ActionTypes'
import initialState from 'redux/reducers/InitialState'

export default function DataReducer(state = initialState.data, action) {
  switch (action.type) {
    case types.LOAD_DATA_IN_PROGRESS:
      return true
    case types.LOAD_DATA_SUCCESS:
      return action.data
    case types.LOAD_DATA_FAILURE:
      return false
    default:
      return state
  }
}
