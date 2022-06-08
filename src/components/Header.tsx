import React from 'react'
import '../App.css'

import { useAppSelector } from '../hooks'

import { Link } from 'react-router-dom'
import { AppBar, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const Header: React.FC = () => {
	const login = useAppSelector((state) => state.auth)

	const HeaderLink = styled(Link)(({ theme }) => ({
		fontSize: '1.8rem',
		margin: '1rem 0',
		color: '#e3c9a6',
		textDecoration: 'none',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.2rem',
		},
	}))
	return (
		<AppBar position='static' className='header'>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
				}}
			>
				<HeaderLink to='/'>AdGate</HeaderLink>
				<HeaderLink to='/news'>News</HeaderLink>
				{login ? (
					<HeaderLink to='/profile'>Profile</HeaderLink>
				) : (
					<HeaderLink to='/login'>Login</HeaderLink>
				)}
			</Box>
		</AppBar>
	)
}

export default Header
