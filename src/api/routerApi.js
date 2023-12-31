import fetch from 'isomorphic-unfetch'

const routerApi = {
	getRoute(routeObject) {
		const original = [...routeObject.original].reverse().join(',')
		const destination = [...routeObject.destination].reverse().join(',')
		const space = [...routeObject.space].reverse().join(',')
		debugger
		return fetch(
			`http://router.project-osrm.org/route/v1/driving/${original};${space};${destination}?steps=true&geometries=geojson&overview=full`
		).then(r => r.json())
	}
}

export default routerApi
