import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'

import { Typography, Box } from '@mui/material'

const userProfile = () => {
	return (
		<Box sx={{ width: '50%', mt: 10, mb: 2, mx: 'auto' }}>
			<Box
				sx={{
					width: '70px',
					height: '70px',
					borderRadius: '50%',
					background: '#fff',
				}}
			/>
		</Box>
	)
}

export default userProfile
