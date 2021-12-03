import React, { useState } from "react"

//CustomHook
import { useFetchPexels } from "../../CustomHook/useFetchPexels"

//Components
import ImageSearch from "../../Components/ImageSearch/ImageSearch"

const Images = () => {
	const [searchImage, setSearchImage] =
		useState("")

	const { data } = useFetchPexels(
		`https://api.pexels.com/v1/search?query=${searchImage}&per_page=20`
	)

	// console.log(data.photos)

	const handleInput = ({ value }) =>
		setSearchImage(value)

	return (
		<>
			<div className='mb-9 mt-9 text-center'>
				<input
					className='text-center mb-10'
					type='text'
					placeholder='Buscar'
					onChange={({ target }) =>
						handleInput(target)
					}
				/>
			</div>

			<div className='container'>
				<ImageSearch data={data?.photos} />
			</div>
		</>
	)
}

export default Images
