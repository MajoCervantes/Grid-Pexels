import { useSelector } from "react-redux"

//CustomHook
import { useFetchPexels } from "../../CustomHook/useFetchPexels"

//Components
import Grid from "../../Components/Grid/Grid"

const Home = () => {
	const { newFavData } = useSelector(
		(store) => store.favs
	)

	const { data } = useFetchPexels(
		`https://api.pexels.com/v1/search?query=nature&per_page=25`
	)
	// console.log(data)

	return (
		<div className='container'>
			{data.photos?.map((item) => (
				<Grid
					data={item}
					newFavData={newFavData?.some(
						(photo) => photo.id === item.id
					)}
				/>
			))}
		</div>
	)
}

export default Home
