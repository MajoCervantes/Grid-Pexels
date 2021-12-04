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
				<form className='w-full m-auto flex flex-col justify-center items-center px-15 py-10 '>
					<input
						className='w-1/4 mb-10 py-2 px-1 text-blue text-center outline-none border border-blue'
						type='text'
						placeholder='Buscar'
						onChange={({ target }) =>
							handleInput(target)
						}
					/>
				</form>
			</div>

			<div className='container'>
				<ImageSearch data={data?.photos} />
			</div>
		</>
	)
}

export default Images
