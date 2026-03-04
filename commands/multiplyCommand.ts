class MultiplyCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("multiply <n1> <n2>")
            .action((n1: any, n2: any) => this.multiply(n1, n2));
    }

    multiply(n1: any, n2: any) {
        console.log(Number(n1) * Number(n2));
    }
}
export = MultiplyCommand;
