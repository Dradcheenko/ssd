import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { signUp } from 'next-auth-sanity/client'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import { CgProfile } from 'react-icons/cg'
import stylesButton from '../place/BookTrip/BookTrip.module.scss'
import { IAuthFields } from './auth.interface'
import Layout from '@/components/common/Layout'

import styles from './Auth.module.scss'
import { useRouter } from 'next/router'

const Auth: FC = () => {
	const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})

	const isReg = typeForm === 'register'

	const { push } = useRouter()

	const onSubmit: SubmitHandler<IAuthFields> = async data => {
		if (isReg) {
			await signUp(data)
		} else {
			const response = await signIn('sanity-login', {
				redirect: false,
				...data
			})
			if (response.error) {
				toast.error(response.error)
				return
			}

			await push('/')
		}
	}

	return (
		<Layout>
			<h1 className="h1">Зарегестрироваться/{isReg ? 'Войти' : 'Войти'}</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrapper}>
					<input
						{...register('email', { required: 'Не верно' })}
						type="text"
						placeholder="Логин"
						className={styles.input}
					/>
					{errors.email && (
						<div className={styles.error}>{errors.email.message}</div>
					)}
				</div>
				<div className={styles.wrapper}>
					<input
						{...register('password', { required: 'Не верно' })}
						type="password"
						placeholder="Пароль"
						className={styles.input}
					/>
					{errors.password && (
						<div className={styles.error}>{errors.password.message}</div>
					)}
				</div>
				<button
					aria-label={isReg ? 'Register' : 'Login'}
					className={stylesButton.button}
					type="submit"
				>
					<span className={stylesButton.text}>
						{isReg ? 'Зарегестрироваться' : 'Войти'}
					</span>
					<span className={stylesButton.icon}>
						<CgProfile size="18" />
					</span>
				</button>
			</form>
			<div className={styles.changeType}>
				<button
					aria-label={`I want ${isReg ? 'login' : 'register'}`}
					onClick={() => setTypeForm(isReg ? 'login' : 'register')}	
				>
					Я хочу {isReg ? 'войти' : 'зарегестрироваться'}
				</button>
			</div>
		</Layout>
	)
}

export default Auth
