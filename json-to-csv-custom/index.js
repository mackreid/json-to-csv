import { SaveToCsv } from "./wrapper.js"
import { dataOne, dataTwo } from "../mock-data.js"

SaveToCsv(dataOne, './dataOne.csv')
SaveToCsv(dataTwo, './dataTwo.csv')