import buildPath from "../helpers/buildPath.js"

export default [
	{
		method: 'GET',
		path: buildPath('/tasks/:id'),
		handler: (req, res) => {
			return res.end('some list of tasks :)')
		}
	}
]