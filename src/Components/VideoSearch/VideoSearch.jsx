import React from "react"
import ReactPlayer from "react-player"

const VideoSearch = ({ pexelVideos }) => {
	// console.log(pexelVideos)
	return (
		<>
			{pexelVideos?.map((item) => (
				<div>
					<ReactPlayer
						key={item?.id}
						url={item?.url}
						playing
						width='100%'
						height='100%'
					/>
				</div>
			))}
		</>
	)
}

export default VideoSearch
