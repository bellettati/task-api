export default [
	{
		method: 'GET',
		path: '/tasks',
		handler: (req, res) => {
			return res.end('some list of tasks :)')
		}
	}
]