import React from "react"
import { useDispatch } from "react-redux"

//Icons
import { BsSuitHeartFill } from "react-icons/bs"
import { BsSuitHeart } from "react-icons/bs"

//Styles
import "./grid.styles.css"

//Actions
import { handleAddFavs } from "../../actions/favs.action"

const Grid = ({ data, isFavData }) => {
	// const dispatch = useDispatch()

	// const handleAddFavData = () => {
	// 	dispatch(handleAddFavs(data, isFavData))
	// }
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
						{/* {isFavData.some(
							(photo) => photo.id === item.id
						)(
							isFavData ? (
								<BsSuitHeartFill
									onClick={handleAddFavData}
								/>
							) : (
								<BsSuitHeart
									onClick={handleAddFavData}
								/>
							)
						)} */}
					</div>
				</div>
			))}
		</>
	)
}

export default Grid
