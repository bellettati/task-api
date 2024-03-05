import TaskController from "../controllers/TaskController.js"
import buildPath from "../helpers/buildPath.js"

const controller = new TaskController()

export default [
	{
		method: 'GET',
		path: buildPath('/tasks'),
		handler: (req, res) => controller.selectAll(req, res)
	},
	{
		method: 'POST',
		path: buildPath('/tasks'),
		handler: (req, res) => controller.create(req, res)
	},
]