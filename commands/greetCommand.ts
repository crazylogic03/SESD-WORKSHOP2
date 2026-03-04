class Greet_Command {
    name;
    program



    register() {
        this.program
            .command("greet <name>")
            .action((name) => this.sayHello(name))
    }

    sayHello(name) {
        console.log("Hello")
    }
}
