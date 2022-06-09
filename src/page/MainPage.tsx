import React, { useEffect } from 'react'

import ProductItem from '../components/ProductItem'
import Blur from '../components/Blur'
import { fetchProducts } from '../redux/dataSlice'
import { useAppDispatch, useAppSelector } from '../hooks'

import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

const MainPage: React.FC = () => {
	const dispath = useAppDispatch()
	const { product, loading } = useAppSelector((state) => state.products)
	const CustomGridContainer = styled(Grid)(({ theme }) => ({
		paddingTop: '14rem',
		paddingBottom: '2rem',
		[theme.breakpoints.down('md')]: {
			paddingTop: '3rem',
		},
	}))

	useEffect(() => {
		dispath(fetchProducts())
	}, [])

	return (
		<>
			{loading ? (
				<CustomGridContainer container spacing={3} sx={{ pt: 10, pb: 2 }}>
					{product.map((d) => (
						<Grid item xs={12} sm={6} lg={4} key={d.id}>
							<ProductItem
								thumbnail={d.thumbnail}
								title={d.title}
								price={d.price}
								description={d.description}
								rating={d.rating}
							/>
						</Grid>
					))}
				</CustomGridContainer>
			) : (
				<Blur />
			)}
		</>
	)
}

export default MainPage
