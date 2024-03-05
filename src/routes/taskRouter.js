import TaskController from "../controllers/TaskController.js"
import buildPath from "../helpers/buildPath.js"

const controller = new TaskController()

export default [
	{
		method: 'GET',
		path: buildPath('/tasks'),
		handler: (req, res) => controller.select(req, res)
	},
	{
		method: 'POST',
		path: buildPath('/tasks'),
		handler: (req, res) => controller.create(req, res)
	},
	{
		method: 'PUT',
		path: buildPath('/tasks/:id'),
		handler: (req, res) => controller.updateById(req, res)
	},
	{
		method: 'DELETE',
		path: buildPath('/tasks/:id'),
		handler: (req, res) => controller.deleteById(req, res)
	},
	{
		method: 'PATCH',
		path: buildPath('/tasks/:id/completed'),
		handler: (req, res) => controller.setTaskCompletedDateById(req, res)
	},
]