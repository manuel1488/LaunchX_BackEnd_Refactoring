class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        let trick = "";

        if(explorer.score % 3 === 0)
            trick = "FIZZ";         

        if(explorer.score % 5 === 0)
            trick += "BUZZ";

        explorer.trick = trick != "" ? trick : explorer.score;

        return explorer;
    }

    static applyValidationInNumber(number){
        let trick = "";

        if(number % 3 === 0)
            trick = "FIZZ";         

        if(number % 5 === 0)
            trick += "BUZZ";

        trick = trick != "" ? trick : number;

        return trick;
    }
}



module.exports = FizzbuzzService;