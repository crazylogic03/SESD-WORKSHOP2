export default class AddCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("add <n1> <n2>")
            .action((n1: any, n2: any) => this.add(n1, n2));
    }

    add(n1: any, n2: any) {
        console.log(Number(n1) + Number(n2));
    }
}
