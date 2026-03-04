class RandomCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("random <min> <max>")
            .description("Generate a random number between min and max")
            .action((min: any, max: any) => this.generateRandom(min, max));
    }

    generateRandom(min: any, max: any) {
        const result = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        console.log(result);
    }
}
export = RandomCommand;
