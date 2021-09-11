import { combineReducers } from 'redux'
import data from 'redux/reducers/DataReducer'
const rootReducer = combineReducers({
  data: data,
})

export default rootReducer
