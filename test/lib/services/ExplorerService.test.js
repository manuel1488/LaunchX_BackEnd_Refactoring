const Reader = require("./../../../lib/utils/Reader");
const ExplorerService = require("./../../../lib/services/ExplorerService");


describe("Test for ExplorerSErvice class", () => {
    test("test result for filterByMission function", () => {
        const explorers = Reader.readJsonFile("data/explorers.json");

        expect(ExplorerService.filterByMission(explorers, "node")).toEqual(
            expect.arrayContaining([
                expect.objectContaining({"mission": "node"})
            ])
        );
    });


    test("test result for getAmountOfExplorersByMission", () =>{
        const explorers = Reader.readJsonFile("data/explorers.json");

        count = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(count).toBe(10);
    });


    test("test result for getExplorersUsernamesByMission", () => {
        const explorers = Reader.readJsonFile("data/explorers.json");  
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

        expect(usernames).not.toBeUndefined();
        expect(usernames).toContain("ajolonauta1");
        expect(usernames).toContain("ajolonauta2");
        expect(usernames).toContain("ajolonauta3");
    });
});