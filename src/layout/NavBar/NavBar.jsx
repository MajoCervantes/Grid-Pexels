import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

//Actions
import { handleLogoutAction } from "../../actions/login.action"

const NavBar = ({ children }) => {
	const dispatch = useDispatch()
	return (
		<>
			<div className='w-full flex justify-around items-center p-4 bg-lightBlue text-white mb-2'>
				<Link className='w-1/2 font-bold' to='/'>
					Home
				</Link>
				<div className='w-1/4 flex justify-around items-center'>
					{/* <Link to='/videos'>Videos</Link> */}
					<Link
						className='font-bold'
						to='/images'>
						Images
					</Link>
					<Link className='font-bold' to='/Favs'>
						Favorites
					</Link>
					<button
						className='font-bold'
						onClick={() =>
							dispatch(handleLogoutAction())
						}>
						Logout
					</button>
				</div>
			</div>
			{children}
		</>
	)
}

export default NavBar
