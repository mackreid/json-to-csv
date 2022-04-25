import fs from 'fs'

export const SaveToCsv = async (input, output) => {
    const headers = [Object.keys(input[0])]
    console.log(`LOG: Creating CSV with headers: ${headers}`)

    let data = `${headers}\n`
    data += input.map(elem => {
        console.log(`LOG: Adding row data ${elem}.`)
        return Object.values(elem).toString()
    }).join('\n')
    console.log(`LOG: Complete compiling data.`)

    await fs.writeFileSync(`./output/${output}`, data)
    console.log(`LOG: File written with output ./output/${output}`)
}