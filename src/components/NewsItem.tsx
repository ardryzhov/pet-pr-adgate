import React from 'react'

import { INews } from '../redux/dataSlice'

import {
	Box,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from '@mui/material'

const NewsList: React.FC<INews> = ({ url, title, description, image }) => {
	const shortDescr =
		description.length > 100 ? `${description.slice(0, 100)}...` : description
	return (
		<Box sx={{ my: 2 }}>
			<Card sx={{ display: 'flex' }}>
				<CardMedia
					component='img'
					image={image}
					height='180'
					width='340'
					sx={{
						width: '340px',
						height: '180px',
					}}
				/>
				<Box
					sx={{
						px: 3,
						background: '#E7D1C0',
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-around',
					}}
				>
					<CardContent>
						<Box>
							<Typography>{title}</Typography>
						</Box>
						<Box>
							<Typography>{shortDescr}</Typography>
						</Box>
					</CardContent>
					<CardActions>
						<Button variant='contained' color='success'>
							<a
								style={{ textDecoration: 'none', color: '#fff', fontWeight: '700' }}
								href={url}
							>
								Read more
							</a>
						</Button>
					</CardActions>
				</Box>
			</Card>
		</Box>
	)
}

export default NewsList
