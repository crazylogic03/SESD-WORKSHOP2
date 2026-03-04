import { Command } from "commander";

export default class CLI_Engine {
    program: Command;

    constructor() {
        this.program = new Command();
    }

    registerCommands(commands: any[]) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register();
        });
    }

    run() {
        this.program.parse();
    }
}