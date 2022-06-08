import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		secondary: {
			main: '#27262E',
		},
		primary: {
			main: '#E3C9A6',
		},
	},
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Router>
	</Provider>
)
