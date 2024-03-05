import http from 'node:http'
import taskRoutes from './routes/taskRouter.js'

const server = http.createServer(async (req, res) => {
	const {method, url} = req
	const buffers = []
	res.setHeader('Content-type', 'application/json')
	for await(const chunks of req) {
		buffers.push(chunks)
	}
	try {
		req.body = JSON.parse(Buffer.concat(buffers).toString())
	} catch {
		req.body = null
	}

	const route = taskRoutes.find(route => route.method === method && route.path.test(url))
	if(route) {
		const routeParams = url.match(route.path)
		const {...params} = routeParams.groups
		req.params = params
		return route.handler(req, res)
	}

	return res.writeHead(404).end('NOT_FOUND')
})

const PORT = 3333;
server.listen(PORT, () => console.log(`server listening on url: http://localhost:${PORT}/`))