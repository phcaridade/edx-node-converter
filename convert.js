const fs=require('fs')
const csv=require('csvtojson')

const csvInputFilePath='customer-data.csv'
const jsonOutputFilePath='customer-data.json'

var jsonBuffer="[\n"
var jsonObjFound=0

csv()
    .fromFile(csvInputFilePath)
    .on('json', (jsonObj)=>{
        //console.log('OBJ: ', JSON.stringify(jsonObj,undefined,2))
        if(jsonObjFound>0) jsonBuffer+=",\n";
        jsonBuffer+=JSON.stringify(jsonObj,undefined,2);
        jsonObjFound++;
    })
    .on('done', (error)=>{
        if(error){
            return console.error('Got error:', error)
        }
        jsonBuffer+="\n]"
        fs.writeFileSync(jsonOutputFilePath, jsonBuffer);
    }
)