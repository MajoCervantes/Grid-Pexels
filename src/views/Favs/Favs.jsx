import React from "react"

import { useSelector } from "react-redux"

const Favs = () => {
	const { favsData } = useSelector(
		(store) => store.favs
	)
	return (
		<div className='container '>
			{favsData.map((item) => (
				<div className='img-container'>
					<div className='second-container'>
						<img src={item.src.large} alt='' />
					</div>
				</div>
			))}
		</div>
	)
}

export default Favs
