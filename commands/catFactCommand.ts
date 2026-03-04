import axios from 'axios';

class CatFactCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("catfact")
            .description("Get a random cat fact")
            .action(async () => this.getCatFact());
    }

    async getCatFact() {
        try {
            const res = await axios.get("https://catfact.ninja/fact");
            console.log(`🐱 ${res.data.fact}`);
        } catch {
            console.log("Could not fetch cat fact.");
        }
    }
}
export = CatFactCommand;
