import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

const dataSlice = createSlice({
	name: 'data',
	initialState: {
		login: 'Admin',
		password: 12345,
		auth: false,
		newsData: {
			loading: false,
			news: [],
		},
		products: {
			loading: false,
			products: [],
		},
	},
	reducers: {
		login(state, action: PayloadAction<{ name: string; password: number }>) {
			if (
				state.login === action.payload.name &&
				state.password === action.payload.password
			) {
				state.auth = true
			}
		},
		logout(state) {
			state.auth = false
		},
	},
})

export const { login, logout } = dataSlice.actions
export default dataSlice.reducer
