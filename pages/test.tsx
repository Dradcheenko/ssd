import Favorites from '@/screens/favorites/Mapa'
import { GetStaticProps } from 'next'
import { sanityClient } from '../app/sanity'
import { queries } from '../app/queries'

const Profile = ({ places }) => {
	return <Favorites places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
	const result = await sanityClient.fetch(queries.getPlaces)

	return {
		props: {
			places: result
		}
	}
}

Profile.isOnlyUser = true

export default Profile
