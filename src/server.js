import http from 'node:http'

const server = http.createServer(async (req, res) => {
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

	return res.end(JSON.stringify(req.body))
})

const PORT = 3333;
server.listen(PORT, () => console.log(`server listening on url: http://localhost:${PORT}/`))