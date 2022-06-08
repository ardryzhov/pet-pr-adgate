import React from 'react'
import '../App.css'

import { useForm, SubmitHandler } from 'react-hook-form'

import { Box, TextField, Button, Typography } from '@mui/material'

interface FormValues {
	email: string
	password: number
}

const Auth: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>()

	const handleAuth: SubmitHandler<FormValues> = (data) => {}

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
			<form className='form-auth' onSubmit={handleSubmit(handleAuth)}>
				<Box>
					<TextField
						label='Логин'
						variant='outlined'
						{...register('email', {
							required: true,
						})}
						sx={{ background: '#27262E' }}
					/>
					<div style={{ height: '40px' }}>
						{errors.email && <Typography>Error!</Typography>}
					</div>
				</Box>
				<Box>
					<TextField
						label='Пароль'
						variant='outlined'
						{...(register('password'),
						{
							required: true,
						})}
						sx={{ background: '#27262E' }}
					/>
					<div style={{ height: '40px' }}>
						{errors.password && <Typography>Error!</Typography>}
					</div>
				</Box>
				<Button
					variant='contained'
					type='submit'
					sx={{ background: '#27262E', color: '#fff', fontWeight: '700' }}
				>
					Войти
				</Button>
			</form>
		</Box>
	)
}

export default Auth
