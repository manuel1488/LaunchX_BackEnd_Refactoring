const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("data/explorers.json");
        const filtered_ilst = ExplorerService.filterByMission(explorers, mission);

        return filtered_ilst;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("data/explorers.json");
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return usernames;
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("data/explorers.json");
        const amount = ExplorerService.getAmountOfExplorersByMission(explorers, mission);

        return amount;
    }

    static applyValidationInNumber(number){
        const trick = ExplorerService.applyValidationInNumber(number);

        return trick;
    }
}


module.exports = ExplorerController;