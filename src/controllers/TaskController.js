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
}