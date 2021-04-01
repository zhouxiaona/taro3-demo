import { SAVE_DATA, UPDATE_DATA } from '../constants/index.js'
const INITIAL_STATE = {
	userdata: null,
}

export default function reduxData(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SAVE_DATA:
			return {
				...state,
				userdata: { ...action.data }
			}
		case UPDATE_DATA:
			return {
				...state,
				userdata: { ...state.userdata, ...action.data }
			}
		default:
			return state
	}
}
