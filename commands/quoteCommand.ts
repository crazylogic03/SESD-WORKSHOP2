import axios from 'axios';

class QuoteCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .description("Get a random quote")
            .action(async () => this.getQuote());
    }

    async getQuote() {
        try {
            const res = await axios.get("https://api.quotable.io/random");
            console.log(`"${res.data.content}"`);
            console.log(`- ${res.data.author}`);
        } catch {
            console.log("Could not fetch quote");
        }
    }
}
export = QuoteCommand;
