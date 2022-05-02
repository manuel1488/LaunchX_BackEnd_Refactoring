const fs = require("fs");


class Reader{
    static readJsonFile(pathFile){
        const rawdata = fs.readFileSync(pathFile);
        const explorers = JSON.parse(rawdata);

        return explorers;
    }
}


module.exports = Reader;