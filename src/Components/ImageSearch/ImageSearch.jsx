import React from "react"

//Styles
import "./imageSearch.styles.css"

const ImageSearch = ({ data }) => {
	console.log(data)
	return (
		<>
			{data?.map((item) => (
				<div
					className='img-container'
					key={item.id}>
					<div className='second-container'>
						<img
							src={item?.src.large}
							alt='img'
						/>
					</div>
				</div>
			))}
		</>
	)
}

export default ImageSearch
