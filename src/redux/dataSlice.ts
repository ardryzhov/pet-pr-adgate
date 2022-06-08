import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export interface IProduct {
	id?: number
	thumbnail: string
	title: string
	price: number
	description: string
	rating: number
}

interface IProductData {
	loading: boolean
	product: IProduct[]
}

export interface INews {
	url: string
	title: string
	description: string
	urlToImage: string
}

interface INewsData {
	loading: boolean
	news: INews[]
}

interface IInitialState {
	login: string
	password: number
	auth: boolean
	newsData: INewsData
	products: IProductData
}

const initialState: IInitialState = {
	login: 'Admin',
	password: 12345,
	auth: false,
	newsData: {
		loading: false,
		news: [],
	},
	products: {
		loading: false,
		product: [],
	},
}

export const fetchProducts = createAsyncThunk(
	'data/fetchProducts',
	async function (_, { dispatch }) {
		const response = await fetch('https://dummyjson.com/products?limit=20')
		const jsonResult = await response.json()
		dispatch(addProducts(jsonResult.products))
	}
)

export const fetchNews = createAsyncThunk(
	'data/fetchProducts',
	async function (_, { dispatch }) {
		const response = await fetch(
			'https://newsapi.org/v2/top-headlines?pageSize=15&country=us&apiKey=6b91115a0e8847a19dfac05baa60714d'
		)
		const jsonResult = await response.json()
		// console.log('jsonResult: ', jsonResult)
		// console.log('jsonResult.products: ', jsonResult.products)
		dispatch(addNews(jsonResult.articles))
	}
)

const dataSlice = createSlice({
	name: 'data',
	initialState,
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
		addProducts(state, action: PayloadAction<IProduct[]>) {
			state.products.product = [...action.payload]
			state.products.loading = true
		},
		addNews(state, action: PayloadAction<INews[]>) {
			// console.log('WORKING...')
			// console.log('action.payload: ', action.payload)
			state.newsData.news = [...action.payload]
			state.newsData.loading = true
		},
	},
})

export const { login, logout, addProducts, addNews } = dataSlice.actions
export default dataSlice.reducer
