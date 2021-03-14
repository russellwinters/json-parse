const fs = require('fs');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


const validateFile = (args) => {
    let isValid = false;
    if("file" in args && fs.existsSync(`./${args.file}.json`)) {
        isValid = true
    } 
    return isValid ? args : false;
}

const read = ( args ) => {
    if (args) {
        const data = fs.readFileSync(`./${args.file}.json`, {encoding:'utf8'})
        console.log(JSON.parse(data));
    } else {
        return "No File to Read."
    }
}

const write = ( args ) => {
    if (args.rewrite) {
        writeToFile(composeObject(args), `${args.file}`)

    } else {
        updateFile(args)
    }
}

const composeObject = (args, previousData = []) => {
    const keys = args.keys ? args.keys.split(",") : console.log("No keys given")
    const values = args.values ? args.values.split(",") : console.log("No values given")
    let newObj = {};
    for (let  [i, key] of keys.entries()) {
        newObj[key] = (values && values[i]) || null
    }

    return [...previousData,newObj]
}

const updateFile = (args) =>{
    const data = fs.readFileSync(`./${args.file}.json`, {encoding:'utf8'})

    writeToFile(composeObject(args, JSON.parse(data)), `${args.file}`)
}

const writeToFile = (data, fileName) => {
    fs.writeFileSync(`./${fileName}.json`, JSON.stringify(data))
    console.log("Wrote to file")
}

const app = (args) => {
   args && args.r && read(validateFile(args))
    args && args.w && write(args)

}

app(argv);