import React, { useEffect } from 'react'

import NewsItem from '../components/NewsItem'
import Blur from '../components/Blur'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchNews } from '../redux/dataSlice'

import { Box } from '@mui/material'

const NewsPage: React.FC = () => {
	const dispath = useAppDispatch()
	const { news, loading } = useAppSelector((state) => state.newsData)
	useEffect(() => {
		dispath(fetchNews())
	}, [])

	return (
		<Box sx={{ pt: 10, pb: 2 }}>
			{loading ? (
				news.map((n) => (
					<NewsItem
						key={n.url}
						url={n.url}
						title={n.title}
						description={n.description}
						image={n.image}
					/>
				))
			) : (
				<Blur />
			)}
		</Box>
	)
}

export default NewsPage
