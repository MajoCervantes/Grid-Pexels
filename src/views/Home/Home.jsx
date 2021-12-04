import React, { useState } from "react"
import { useSelector } from "react-redux"

//CustomHook
import { useFetchPexels } from "../../CustomHook/useFetchPexels"

//Components
import Grid from "../../Components/Grid/Grid"

const Home = () => {
	const [next, setNext] = useState("")
	const [nextDada, setNextDada] = useState(null)

	const { newFavData } = useSelector(
		(store) => store.favs
	)

	const { data, nextPage } = useFetchPexels(
		`https://api.pexels.com/v1/search?query=nature&per_page=30`
	)
	// console.log(data)

	const handleNextPage = async () => {
		const response = await fetch(nextPage, {
			headers: {
				Authorization:
					"563492ad6f9170000100000132aeab2ee43e4cf18c37282032435d84",
			},
		})
		const result = await response.json()
		setNext(result.next_page)
		setNextDada([...data, ...result.photos])
	}

	return (
		<div className='container'>
			{data.photos?.map((item) => (
				<Grid
					data={item}
					handleNextPage={handleNextPage}
					newFavData={newFavData?.some(
						(photo) => photo.id === item.id
					)}
				/>
			))}
		</div>
	)
}

export default Home
