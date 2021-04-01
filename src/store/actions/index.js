import {
  SAVE_DATA,
  UPDATE_DATA,
} from '../constants/index.js'
export const saveData = data => ({ type: SAVE_DATA, data })
export const updateData = data => ({ type: UPDATE_DATA, data })

export const asyncTest = data => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: SAVE_DATA,
        data: data
      })
    }, 1000)
  }
}

