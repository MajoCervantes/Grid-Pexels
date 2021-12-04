import React, {
	useState,
	useEffect,
	useRef,
} from "react"
import { useDispatch } from "react-redux"

//Icons
import { BsSuitHeartFill } from "react-icons/bs"

//Actions
import { handleAddFavs } from "../../actions/favs.action"

//Styles
import "./grid.styles.css"

const Grid = ({
	data,
	newFavData,
	handleNextPage,
}) => {
	const [view, setView] = useState(false)
	const containerRef = useRef(null)
	const dispatch = useDispatch()

	const handleAddFavData = () => {
		dispatch(handleAddFavs(data, newFavData))
	}

	const callbackFunction = (entries) => {
		const [entry] = entries
		setView(entry.isIntersecting)
	}

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 1.0,
		}
		if (data?.length > 29) {
			const observer = new IntersectionObserver(
				callbackFunction,
				options
			)
			if (containerRef.current) {
				observer.observe(containerRef.current)
			}
		}
	}, [containerRef, data])

	useEffect(() => {
		if (view) {
			handleNextPage()
		}
	}, [view, handleNextPage])

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
			<div
				ref={containerRef}
				style={{ height: "40px" }}></div>
			{/* <button onClick={handleNextPage()}>
				More
			</button> */}
		</>
	)
}

export default Grid
