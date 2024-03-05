import {randomUUID} from 'node:crypto'

export default class DataBase {
	data = [
		{
			"id": "96a06522-d33d-4084-887f-b0fa5f15c885",
			"title": "Make potatoes",
			"description": "description",
			"completedAt": null,
			"createdAt": "2024-03-05T20:33:20.128Z",
			"updatedAt": "2024-03-05T20:33:20.128Z"
		}
	]

	select(search) {
		if(search) {
			return this.data.filter((task) => 
				Object.entries(search).some(([key, value]) => 
					task[key].toLowerCase().includes(value.toLowerCase())
				)
			)
		}
		return this.data
	}

	selectById(id) {
		const task = this.data.find(task => task.id === id)
		if(!task) {
			throw new Error('Task not found')
		}
		return task
	}

	create({title, description}) {
		const task = {
			id: randomUUID(),
			title,
			description,
			completedAt: null,
			createdAt: new Date(),
			updatedAt: new Date()
		}

		this.data.push(task)

		return task
	}

	updateById({id, data}) {
		console.log('is beeing updated')
		const taskIndex = this.data.findIndex(task => task.id === id)
		if(taskIndex === -1) {
			console.log('task not found')
			throw new Error('Task not found')
		}
		const validKeys = new Set(['title', 'description', 'completedAt'])
		const hasInavlidField = !Object.keys(data).every(key => validKeys.has(key)) 
		if(hasInavlidField) {
			throw new Error('Invalid field')
		}
		
		const currentTaskData = this.data[taskIndex]
		this.data[taskIndex] = {...currentTaskData, ...data}
	}

	deleteById(id) {
		const taskIndex = this.data.findIndex(task => task.id === id)
		if(taskIndex === -1) {
			throw new Error('Task not found')
		}
		this.data.splice(taskIndex, 1) 
		console.log(taskIndex)
		console.log(this.data)
	}
}