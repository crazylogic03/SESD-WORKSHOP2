const chalk = require('chalk')
class Greet_Command {
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
        console.log(chalk.red(`Hello ${name}`));
        console.log(chalk.blue(`Hello ${name}`));
        console.log(chalk.green(`Hello ${name}`));
        // console.log(chalk.orange(`Hello ${name}`));
        // console.log(chalk.pink(`Hello ${name}`));
        // console.log(chalk.voilet(`Hello ${name}`));
        // console.log(chalk.indigo(`Hello ${name}`));
        console.log(chalk.yellow(`Hello ${name}`));
        console.log(chalk.white(`Hello ${name}`));
        console.log(chalk.black(`Hello ${name}`));
    }
}
export = Greet_Command;
