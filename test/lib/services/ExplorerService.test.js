const Reader = require("./../../../lib/utils/Reader");
const ExplorerService = require("./../../../lib/services/ExplorerService")


describe('Test for ExplorerSErvice class', () => {
    test('test result for filterByMission function', () => {
        const explorers = Reader.readJsonFile('data/explorers.json');

        expect(ExplorerService.filterByMission(explorers, 'node')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({'mission': 'node'})
            ])
        )
    });
})