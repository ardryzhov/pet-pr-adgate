import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'
import { logout } from '../redux/dataSlice'

import { Typography, Box, Skeleton, Button } from '@mui/material'
import { useNavigate } from 'react-router'

const ProfilePage = () => {
	const login = useAppSelector((state) => state.login)
	const pass = useAppSelector((state) => state.password)
	const auth = useAppSelector((state) => state.auth)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const userProfileData = [
		{ value: 'Имя', key: 'Leanne Graham' },
		{ value: 'Email', key: 'Sincere@april.biz' },
		{ value: 'Адресс', key: 'Gwenborough, Kulas Light' },
		{ value: 'Телефон', key: '1-770-736-8031 x56442' },
		{ value: 'Сайт', key: 'hildegard.org' },
		{ value: 'Компания', key: 'Romaguera-Crona' },
	]

	useEffect(() => {
		if (!auth) navigate('/login')
	}, [auth])

	return (
		<Box
			sx={{
				width: '50%',
				mt: 10,
				mx: 'auto',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Skeleton variant='circular' width={200} height={200} animation={'wave'} />
			<Box sx={{ my: 2, color: '#e3c9a6' }}>
				<Typography>Login: {login}</Typography>
				<Typography>Password: {pass}</Typography>
			</Box>
			<Box>
				{userProfileData.map((v) => (
					<Typography sx={{ color: '#fff', my: 1 }} key={v.key}>
						{v.value}: {v.key}
					</Typography>
				))}
			</Box>

			<Box>
				<Button
					variant='contained'
					color='success'
					sx={{ color: '#fff', fontWeight: 700 }}
					onClick={() => dispatch(logout())}
				>
					Выйти
				</Button>
			</Box>
		</Box>
	)
}

export default ProfilePage
