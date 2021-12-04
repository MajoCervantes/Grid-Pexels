import React, { useState } from "react"

//CustomHook
import { useFetchPexels } from "../../CustomHook/useFetchPexels"

//Components
import VideoSearch from "../../Components/VideoSearch/VideoSearch"

const Videos = () => {
	const [video, setVideo] = useState("")

	const { data } = useFetchPexels(
		`https://api.pexels.com/videos/search?query=${video}&per_page=20`
	)

	const handleInput = ({ value }) => {
		setVideo(value)
	}

	return (
		<>
			<input
				type='text'
				placeholder='Buscar'
				onChange={({ target }) =>
					handleInput(target)
				}
			/>

			<VideoSearch pexelVideos={data.videos} />
		</>
	)
}

export default Videos
