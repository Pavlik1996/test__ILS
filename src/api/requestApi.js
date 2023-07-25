import { sleep } from '../utils'

const fakeRequests = [
	{
		key: '0',
		original: [59.84660399, 30.29496392],
		space: [59.82934196, 30.42423701],
		destination: [59.83567701, 30.38064206]
	},
	{
		key: '1',
		original: [59.82934196, 30.42423701],
		space: [59.82761295, 30.41705607],
		destination: [59.84660399, 30.29496392]
	},
	{
		key: '2',
		original: [59.83567701, 30.38064206],
		space: [59.84660399, 30.29496392],
		destination: [59.82761295, 30.41705607]
	}
]

const requestApi = {
	async getAll() {
		await sleep(1000)
		return fakeRequests
	}
}

export default requestApi
