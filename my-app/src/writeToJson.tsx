import * as path from 'path'
import * as fs from 'fs'

const writeToJson = (data: Array<JSON>, name: string, age: string , option: number) =>{
    const filePath = path.join(__filename, "..", "data.json");
    //fs.writeFile(filePath, data.concat({"name": name, "age": age, "option": option}))
}

export{writeToJson}