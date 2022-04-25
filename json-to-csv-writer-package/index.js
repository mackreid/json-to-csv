const writer = require('./wrapper.js')
const { dataOne, dataTwo } = require('../mock-data')

writer(dataOne, 'dataOne.csv')
writer(dataTwo, 'dataTwo.csv')