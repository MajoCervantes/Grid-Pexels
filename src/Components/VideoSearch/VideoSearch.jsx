import React from "react"
import ReactPlayer from "react-player"

const VideoSearch = ({ pexelVideos }) => {
	// console.log(pexelVideos)
	return (
		<>
			{pexelVideos?.map((item) => (
				<div key={item.id}>
					{item?.video_files.map((v) => (
						<ReactPlayer
							key={v?.id}
							url={v?.link}
							playing
							width='100%'
							height='100%'
						/>
					))}
				</div>
			))}
		</>
	)
}

export default VideoSearch
