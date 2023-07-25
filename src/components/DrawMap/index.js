import React from 'react'
import { MapContainer, TileLayer, Popup, Polyline } from 'react-leaflet'
import { useSelector } from 'react-redux'
import AutoFitBound from '../../components/AutoFitBound'
import Marker from '../../components/Marker'
import { selectRoute, selectSpace } from '../../features/router/routerSlice'

export const DrawMap = ({ center, zoom }) => {
	const coordinates = useSelector(selectSpace)
	const route = useSelector(selectRoute)
	const [points, setPoints] = React.useState([])
	const [originMarker, setOriginMarker] = React.useState(null)
	const [spaceMarker, setSpaceMarker] = React.useState(null)
	const [destinationMarker, setDestinationMarker] = React.useState(null)
	const [bounds, setBounds] = React.useState([])

	React.useEffect(() => {
		if (route) {
			const points = route.routes[0].geometry.coordinates.map(arr => [arr[1], arr[0]])
			setPoints(points)
			const originPoint = {
				lat: coordinates.original[0],
				lng: coordinates.original[1]
			}
			const destinationPoint = {
				lat: coordinates.destination[0],
				lng: coordinates.destination[1]
			}
			const spacePoint = {
				lat: coordinates.space[0],
				lng: coordinates.space[1]
			}
			setOriginMarker(originPoint)
			setDestinationMarker(destinationPoint)
			setSpaceMarker(spacePoint)
			const newBounds = [originPoint, spacePoint, destinationPoint].map(m => [m.lat, m.lng])
			setBounds(newBounds)
		}
	}, [coordinates])

	const handleSetBounds = bounds => {
		setBounds(bounds)
	}

	return (
		<MapContainer bounds={bounds} center={center} zoom={zoom}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
			/>

			<Polyline color={'blue'} weight={8} positions={points}>
				<Popup>Polygon</Popup>
			</Polyline>
			{originMarker && <Marker position={originMarker} text='Погрузка' />}

			{destinationMarker && <Marker position={destinationMarker} text='Разгрузка 2' />}

			{spaceMarker && <Marker position={spaceMarker} text='Разгрузка 1' />}
			<AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds} />
		</MapContainer>
	)
}
