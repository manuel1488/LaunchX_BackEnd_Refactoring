const Reader = require("./../../../lib/utils/Reader");



describe('Unit test for Reader class', () => {
    test('Read all users arrary', () => {
        const explorers = Reader.readJsonFile('data/explorers.json');

        expect(explorers).not.toBeUndefined()
    })
})
