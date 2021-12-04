import { useState, useEffect } from "react"

export const useFetchPexels = (url) => {
	const [data, setData] = useState([])
	const [nextPage, setNextPage] = useState("")
	useEffect(() => {
		const handleFetchData = async () => {
			const response = await fetch(url, {
				headers: {
					Authorization:
						"563492ad6f9170000100000132aeab2ee43e4cf18c37282032435d84",
				},
			})
			const result = await response.json()
			setData(result)
			setNextPage(result.next_page)

			return () => {
				setData(null)
			}
		}
		handleFetchData()
	}, [url])

	return { data, nextPage, setData, setNextPage }
}
