import { FC } from 'react'
import Layout from '@/common/Layout'
import Meta from '../../../utils/Meta'
import { IPlace } from '@/types/place'
import PlaceItem from '@/elements/Home/PopularPlaces/PlaceItem'

const Mapa: FC<{ places: IPlace[] }> = ({ places }) => {
	return (
		<Layout>
			<Meta title="My favorites" />

			<h1 className="h1">Путиводитель</h1>

			
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A226d356477c6de7a812bd9680675e66fa61d75ff55e8964fb9497ea558c743be&amp;source=constructor" width="475" height="574" ></iframe>
		</Layout>
	)
}

export default Mapa
