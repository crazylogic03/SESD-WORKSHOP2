class SubtractCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("subtract <n1> <n2>")
            .action((n1: any, n2: any) => this.subtract(n1, n2));
    }

    subtract(n1: any, n2: any) {
        console.log(Number(n1) - Number(n2));
    }
}
export = SubtractCommand;
