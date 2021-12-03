import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({ children }) => {
	return (
		<>
			<div className='w-full flex justify-around items-center p-6'>
				<Link className='w-1/2' to='/'>
					Home
				</Link>
				<div className='w-1/4 flex justify-around items-center'>
					<Link to='/videos'>Videos</Link>
					<Link to='/images'>Images</Link>
					<Link to='/logout'>LogOut</Link>
				</div>
			</div>
			{children}
		</>
	)
}

export default NavBar
