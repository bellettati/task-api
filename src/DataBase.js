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
}