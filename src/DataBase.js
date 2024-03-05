import {randomUUID} from 'node:crypto'

export default class DataBase {
	data = []

	selectAll() {
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