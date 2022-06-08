import React from 'react'

import { IProduct } from '../redux/dataSlice'

import {
	Typography,
	Card,
	CardContent,
	CardMedia,
	Box,
	Rating,
} from '@mui/material'

const ProductItem: React.FC<IProduct> = ({
	thumbnail,
	title,
	price,
	description,
	rating,
}) => {
	const shortDescr =
		description.length > 50 ? `${description.slice(0, 50)}...` : description

	return (
		<Card>
			<CardMedia
				component='img'
				height='200'
				image={thumbnail}
				sx={{ backgroundSize: 'cover' }}
			/>
			<CardContent
				sx={{
					background: '#E7D1C0',
					display: 'flex',
					alignItems: 'center',
					gap: '20px',
				}}
			>
				<Box>
					<Typography sx={{ fontSize: '.8rem', fontWeight: 700 }}>
						{title}
					</Typography>
					<Typography sx={{ fontSize: '.7rem', fontStyle: 'italic' }}>
						{price} $
					</Typography>
					<Rating name='read-only' value={rating} readOnly />
				</Box>
				<Box>{shortDescr}</Box>
			</CardContent>
		</Card>
	)
}

export default ProductItem
