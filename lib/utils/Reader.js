const fs = require("fs");


class Reader{
    static readJsonFile(){
        const rawdata = fs.readFileSync("./data/explorers.json");
        const explorers = JSON.parse(rawdata);

        return explorers;
    }
}


module.exports = Reader