class DivideCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("divi <n1> <n2>")
            .description("Divide two numbers")
            .action((n1: any, n2: any) => this.divide(n1, n2));
    }

    divide(n1: any, n2: any) {
        const num1 = Number(n1);
        const num2 = Number(n2);
        if (num2 === 0) {
            console.error("Cannot divide by zero.");
            return;
        }
        console.log(`${num1 / num2}`);
    }
}
export = DivideCommand;
