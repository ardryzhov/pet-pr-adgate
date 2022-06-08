import React from 'react'

import { Container, Box, AppBar, Toolbar, Typography } from '@mui/material'

interface ILayout {
	children: JSX.Element
}

const layout = ({ children }: ILayout) => {
	return <Container>{children}</Container>
}

export default layout
