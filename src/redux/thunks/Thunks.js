import {
  loadDataFailure,
  loadDataInProgress,
  loadDataSuccess,
} from 'redux/actions/DataActions'
import dataService from 'services/DataService'
{
  /* 
    Auth Type, Auth Sub and Account Level check to login user as
    a Store Manager or Retailer Owner common component 
  */
}

export const loadData = () => async (dispatch, getState) => {
  try {
    dispatch(loadDataInProgress())
    const data = await dataService.getData()
    dispatch(loadDataSuccess(data))
  } catch (e) {
    dispatch(loadDataFailure())
  }
}
