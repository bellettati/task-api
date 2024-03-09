import csv from 'csv-parser'
import fs from 'node:fs'

fs.createReadStream('./tasks.csv')
    .pipe(csv())
    .on('data', ({ title, description }) => {
        fetch('http://localhost:3333/tasks', {
            method: 'POST',
            body: JSON.stringify({ title, description }),
        })
            .then((response) => response.text())
            .then((data) => console.log(data))
    })
    .on('end', () => console.log('all files have been read'))
