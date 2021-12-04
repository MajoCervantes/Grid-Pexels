import React, { useState } from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { Link } from "react-router-dom"

//Icons
import { IoLogoGoogleplus } from "react-icons/io"

//Action
import {
	handleGoogleLoginAction,
	handleLoginWithEmailAction,
} from "../../actions/login.action"

const Login = () => {
	const [values, setValues] = useState({
		emailForm: "",
		password: "",
	})

	const { message } = useSelector(
		(store) => store.error
	)
	const dispatch = useDispatch()

	const handleGoogleLogin = (e) => {
		e.preventDefault()
		dispatch(handleGoogleLoginAction())
	}

	const handleLoginWithEmail = (e) => {
		e.preventDefault()
		dispatch(handleLoginWithEmailAction(values))
	}

	return (
		<>
			<div className=' flex justify-end items-center p-4'>
				<p className='p-2 mr-2'>
					Don´t have an account?
				</p>
				<Link
					className='w-1/12 text-white rounded-lg bg-blue p-2 text-center'
					to='/register'>
					Sign Up
				</Link>
			</div>
			<div className='w-full h-1/2 flex justify-center items-center flex-col'>
				<div className='w-2/3 flex bg-lightBlue text-white '>
					<form
						className='w-full m-auto flex flex-col justify-center items-center px-15 py-10 border border-white '
						onSubmit={handleLoginWithEmail}>
						<h2 className='text-5xl font-bold mb-5'>
							Sign in
						</h2>
						<div className='social mb-5 flex flex-col justify-center items-center'>
							<p className='text-sm'>
								With Google
							</p>

							<IoLogoGoogleplus
								className='w-12 h-12 p-2 cursor-pointer mt-2'
								onClick={handleGoogleLogin}
							/>
						</div>

						{message && (
							<p className='text-red text-center mb-5'>
								{message}
							</p>
						)}
						<p className='text-sm text-center mb-5'>
							Or use your account
						</p>
						<input
							type='text'
							placeholder='Correo electrónico'
							className='w-3/4 mb-10 py-2 px-1 text-blue'
							onChange={(e) =>
								setValues({
									...values,
									emailForm: e.target.value,
								})
							}
						/>
						<input
							type='password'
							placeholder='Contraseña'
							className='w-3/4 mb-10 py-2 px-1 text-blue '
							onChange={(e) =>
								setValues({
									...values,
									password: e.target.value,
								})
							}
						/>

						<input
							type='submit'
							value='Sign in'
							className='w-1/3 mb-10 sign-in-email text-white py-2 rounded-lg bg-blue	'
						/>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
