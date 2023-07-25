import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	requests: []
}

const requestListSlice = createSlice({
	name: 'requestList',
	initialState,
	reducers: {
		fetchRequestList(state, _) {
			state.loading = true
		},
		fetchRequestListSuccess(state, action) {
			state.requests = action.payload
		}
	}
})

// Actions
export const requestListActions = requestListSlice.actions

// // Selectors
export const selectListRequests = state => state.requestList.requests

// Reducers
const serviceListReducer = requestListSlice.reducer
export default serviceListReducer
