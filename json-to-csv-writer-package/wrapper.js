const createCsvWriter = require('csv-writer').createObjectCsvWriter

module.exports = function SaveJsonToPath(input, output) {
    const keys = Object.keys(input[0])
    console.log(keys)
    const csvWriter = createCsvWriter({
        path: `./output/${output}`,
        header: keys.map(elem => {
            console.log(`LOG: Adding ${elem} to headers.`)
            return { id: `${elem}`, title: `${elem}`}
        })
    })
    console.log(`CREATED: csv writer.`)

    csvWriter.writeRecords(input)
        .then((error) => {
            if(error) throw error
            console.log(`DONE: File saved to ./output/${output}`)
        })
}