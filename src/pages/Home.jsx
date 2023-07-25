import React from 'react'
import { useSelector } from 'react-redux'
import { routeLoading, routeLoadingError } from '../features/router/routerSlice'
import Loader from '../components/Loader'
import { DrawMap } from '../components/DrawMap'

const Home = () => {
	const loading = useSelector(routeLoading)
	const loadingError = useSelector(routeLoadingError)

	if (loadingError) return <div>please retry...</div>
	if (loading) return <Loader />

	return <DrawMap center={{ lat: 59.924158477766674, lng: 30.352364739995654 }} zoom={12} />
}

export default Home
