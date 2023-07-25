import React from 'react'
import { Marker as MarkerMain, Popup } from 'react-leaflet'

const Marker = ({ position, text }) => {
	if (!position) return null

	return (
		<MarkerMain position={position}>
			<Popup>{text}</Popup>
		</MarkerMain>
	)
}

export default Marker
