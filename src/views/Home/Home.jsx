import { useSelector } from "react-redux"

//CustomHook
import { useFetchPexels } from "../../CustomHook/useFetchPexels"

//Components
import Grid from "../../Components/Grid/Grid"

const Home = () => {
	const { favsData } = useSelector(
		(store) => store.favs
	)

	const { data } = useFetchPexels(
		"https://api.pexels.com/v1/search?query=nature&per_page=20"
	)
	// console.log(data)

	return (
		<div className='container'>
			<Grid
				data={data?.photos}
				isFavData={favsData}
			/>
		</div>
	)
}

export default Home
