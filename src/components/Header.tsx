import React from 'react'

import { Link } from 'react-router-dom'
import { AppBar, Container, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const Header = () => {
	return (
		<>
			<AppBar>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}
				></Container>
			</AppBar>
		</>
	)
}

export default Header
