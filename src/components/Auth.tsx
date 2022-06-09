import React from 'react'
import '../App.css'

import AuthForm from './AuthForm'

import { Box, Typography } from '@mui/material'

const Auth: React.FC = () => {
	return (
		<Box
			sx={{
				maxWidth: '400px',
				margin: '100px auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				background:
					'linear-gradient(140deg, rgba(61,49,54,1) 50%, rgba(41,39,47,1) 100%)',
				borderRadius: '6px',
				boxShadow: '0px 0px 8px 9px rgba(0, 0, 0, 0.2)',
			}}
		>
			<Typography variant='h4' sx={{ color: '#fff', textAlign: 'center', my: 2 }}>
				Вход
			</Typography>
			<AuthForm />
		</Box>
	)
}

export default Auth
