import React from 'react'
import './App.css'

import Header from './components/Header'
import MainPage from './page/MainPage'
import NewsPage from './page/NewsPage'
import AuthPage from './page/AuthPage'

import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/news' element={<NewsPage />} />
					<Route path='login' element={<AuthPage />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
