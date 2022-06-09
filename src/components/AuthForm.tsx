import React from 'react'

import { useAppSelector, useAppDispatch } from '../hooks'
import { login } from '../redux/dataSlice'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Box, TextField, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface FormValues {
	email: string
	password: number
}

const AuthForm: React.FC = () => {
	const email = useAppSelector((state) => state.login)
	const password = useAppSelector((state) => state.password)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormValues>({
		mode: 'onSubmit',
	})

	const handleAuth: SubmitHandler<FormValues> = (data) => {
		if (data.email === email && +data.password === password) {
			dispatch(login())
			navigate('/profile')
		}
	}

	return (
		<form className='form-auth' onSubmit={handleSubmit(handleAuth)}>
			<Box sx={{ width: '80%' }}>
				<TextField
					label='Логин'
					variant='outlined'
					{...register('email', {
						required: 'Поле обязательно к заполнению',
						validate: (value) => value === email,
					})}
					sx={{ background: '#27262E', width: '100%' }}
				/>
				<div
					style={{
						height: '40px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{errors?.email && (
						<Typography sx={{ color: 'red' }}>
							{errors?.email?.message || 'Неверные данные'}
						</Typography>
					)}
				</div>
			</Box>
			<Box sx={{ width: '80%' }}>
				<TextField
					label='Пароль'
					variant='outlined'
					{...register('password', {
						required: 'Поле обязательно к заполнению',
						validate: (value) => +value === +password,
					})}
					sx={{ background: '#27262E', width: '100%' }}
				/>
				<div
					style={{
						height: '40px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					{errors?.password && (
						<Typography sx={{ color: 'red' }}>
							{errors?.password.message || 'Неверные данные'}
						</Typography>
					)}
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
	)
}

export default AuthForm
