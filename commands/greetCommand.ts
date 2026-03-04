export default class Greet_Command {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("greet <name>")
            .action((name: string) => this.sayHello(name));
    }

    sayHello(name: string) {
        console.log(`Hello ${name}`);
    }
}
