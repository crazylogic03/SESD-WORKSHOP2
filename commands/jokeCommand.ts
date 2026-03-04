class JokeCommand {
    program;
    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("joke")
            .description("Random Joke")
            .action(async () => this.getJoke());
    }

    async getJoke() {
        try {
            const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
            console.log(res.data.setup);
            console.log(res.data.punchline);
        } catch (err) {
            if (err) {
                console.log(err);
            }
        }
    }
}
