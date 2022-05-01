class ExplorerService{
    static filterByMission(explorers, mission){
        const filtered_explorers = explorers.filter(e => e.mission == mission);
        return filtered_explorers;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const filtered_explorers = this.filterByMission(explorers, mission);
        return filtered_explorers.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const filtered_explorers = this.filterByMission(explorers, mission);
        const usernames = filtered_explorers.map(e => e.githubUsername);

        return usernames;
    }
}


module.exports = ExplorerService