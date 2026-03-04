class TimeCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("time")
            .description("Display current time")
            .action(() => this.showTime());
    }

    showTime() {
        console.log(new Date().toLocaleString());
    }
}
export = TimeCommand;
