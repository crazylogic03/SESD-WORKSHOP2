const { exeSync } = require("child_process")
const chalk = require("chalk")
class Init_TS {
    program;
    constructor(program) {
        this.program = program
    }


    register() {
        this.program
            .command("init_ts <folderName>")
            .action((folderName) => this.initializeTS(folderName))
    }

    initializeTS(folderName) {
        console.log(chalk.red("Initialize TypeScript Project"))
        this.run(`mkdir ${folderName}`)
        this.run(`cd ${folderName} && npm init -y`)
        this.run(`cd ${folderName} && npm install -D typescript ts-node nodemon @types/node`)
        this.run(`cd ${folderName} && tsc --init`)
        console.log(chalk.blue("TypeScript Project created"));
    }
    run(command) {
        exeSync(command, { stdio: "inherit" })
    }
}