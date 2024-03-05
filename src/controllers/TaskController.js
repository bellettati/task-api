import DataBase from "../DataBase.js"

const dataBase = new DataBase()

export default class TaskController {
	selectAll(req, res) {
		res.end(JSON.stringify(dataBase.selectAll()))
	}
	
	create(req, res) {
		const {title, description} = req.body
		const createdTask = dataBase.create({title, description})
		console.log(createdTask)
		return res.end(JSON.stringify(createdTask)) 
	}
}