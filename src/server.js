import http from 'node:http'

const server = http.createServer(async(req, res) => {
	return res.end(`received request successfully, request url: ${req.url}`)
})

const PORT = 3333;
server.listen(PORT, () => console.log(`server listening on url: http://localhost:${PORT}/`))