import axios from 'axios';

class AdviceCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("advice")
            .description("Get random advice")
            .action(async () => this.getAdvice());
    }

    async getAdvice() {
        try {
            const res = await axios.get("https://api.adviceslip.com/advice");
            console.log(res.data.slip.advice);
        } catch {
            console.log("Could not fetch advice");
        }
    }
}
export = AdviceCommand;
