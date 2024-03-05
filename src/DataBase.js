import {randomUUID} from 'node:crypto'

export default class DataBase {
	data = []

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
		const taskIndex = this.data.findIndex(task => task.id === id)
		if(taskIndex === -1) {
			throw new Error('Task not found')
		}
		const validKeys = new Set(['title', 'description'])
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