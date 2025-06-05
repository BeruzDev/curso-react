import movieNoResults from '../mocks/without-results.json'

const NoResults = () => {
	const error = movieNoResults.Error

	return (
		<div>
			<p>{error}</p>
		</div>
	)
}

export default NoResults
