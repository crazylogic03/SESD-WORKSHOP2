class UppercaseCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("uppercase <text>")
            .description("Convert text to uppercase")
            .action((text: string) => this.toUppercase(text));
    }

    toUppercase(text: string) {
        console.log(text.toUpperCase());
    }
}
export = UppercaseCommand;
