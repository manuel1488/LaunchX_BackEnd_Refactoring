const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});


app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;

    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});


app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const count = ExplorerController.getExplorersAmonutByMission(mission);
    res.json({mission: req.params.mission, quantity: count});
});


app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const usernames = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: req.params.mission, explorers: usernames});
});


app.get('/v1/fizzbuzz/:score', (req, res) => {
    const score = req.params.score;

    const trick = ExplorerController.applyValidationInNumber(score);
    res.json({score: score, trick: trick});
});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});