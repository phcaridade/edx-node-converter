const fs=require('fs')
const csv=require('csvtojson')

const csvInputFilePath='customer-data.csv'
const jsonOutputFilePath='customer-data.json'

var jsonArray=[]

csv()
    .fromFile(csvInputFilePath)
    .on('json', (jsonObj)=>{
        jsonArray.push(jsonObj);
    })
    .on('done', (error)=>{
        if(error){
            return console.error('Got error:', error)
        }
        fs.writeFileSync(jsonOutputFilePath, JSON.stringify(jsonArray,undefined,2));
    }
)