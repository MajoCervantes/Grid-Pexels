import React from "react"
import { useDispatch } from "react-redux"

//Icons
import { BsSuitHeartFill } from "react-icons/bs"

//Actions
import { handleAddFavs } from "../../actions/favs.action"

//Styles
import "./grid.styles.css"

const Grid = ({ data, newFavData }) => {
	console.log(data)
	const dispatch = useDispatch()

	const handleAddFavData = () => {
		dispatch(handleAddFavs(data, newFavData))
	}

	return (
		<>
			<div
				className='img-container'
				key={data.id}>
				<div className='second-container'>
					<img src={data?.src.large} alt='img' />
					<div className='flex justify-evenly items-center'>
						<h2>{data?.photographer}</h2>

						<BsSuitHeartFill
							onClick={handleAddFavData}
							className={`${
								newFavData
									? "text-red-500"
									: "text-black"
							}`}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Grid
