import * as types from 'redux/actions/ActionTypes'

export const loadDataInProgress = () => {
  return {
    type: types.LOAD_DATA_IN_PROGRESS,
  }
}

export const loadDataSuccess = (data) => {
  console.log(data)
  return {
    type: types.LOAD_DATA_SUCCESS,
    data,
  }
}
export const loadDataFailure = () => {
  return {
    type: types.LOAD_DATA_FAILURE,
  }
}
