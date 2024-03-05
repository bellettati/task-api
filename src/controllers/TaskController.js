import DataBase from "../DataBase.js"

const dataBase = new DataBase()

export default class TaskController {
	select(req, res) {
		const {search} = req.query
		const tasks = dataBase.select(search ? {
			title: search,
			description: search
		} : null)

		return res.end(JSON.stringify(tasks))
	}
	
	create(req, res) {
		const {title, description} = req.body
		const createdTask = dataBase.create({title, description})
		return res.end(JSON.stringify(createdTask)) 
	}

	updateById(req, res) {
		const {id} = req.params
		try {
			dataBase.updateById({id, data: req.body})
		} catch(error) {
			return res.writeHead(404).end(JSON.stringify({message: error.message}))
		}
		return res.writeHead(204).end()
	}

	deleteById(req, res) {
		const {id} = req.params
		try {
			dataBase.deleteById(id)
		} catch(error) {
			return res.writeHead(404).end(JSON.stringify({message: error.message}))
		}
		return res.writeHead(204).end()
	}

	setTaskCompletedDateById(req, res) {
		const {id} = req.params
		try {
			const {completedAt} = dataBase.selectById(id)
			if(!completedAt) {
				console.log('here')
				dataBase.updateById({id, data: {completedAt: new Date()}})
			} else {
				console.log('no here')
				dataBase.updateById({id, data: {completedAt: null}})
			}
		} catch(error) {
			return res.writeHead(500).end(JSON.stringify({message: error.message}))
		}
		return res.writeHead(204).end()
	}
}