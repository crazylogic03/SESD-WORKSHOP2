#!/usr/bin/env node
const { Command } = require('commander');
const axios = require("axios")

const program = new Command()

program
    .command("greet <name>")
    .action((name) => console.log(`Hello ${name}`))


program
    .command("add <n1> <n2>")
    .description("Adding Two Numbers")
    .action((n1, n2) => { console.log(Number(n1) + Number(n2)) })

program
    .command("subtract <n1> <n2>")
    .action((n1, n2) => { console.log(Number(n1) - Number(n2)) })

program
    .command("multiply <n1> <n2>")
    .action((n1, n2) => { console.log(Number(n1) * Number(n2)) })

program
    .command("divi <n1> <n2>")
    .action((n1, n2) => {
        const num1 = Number(n1);
        const num2 = Number(n2);
        if (num2 === 0) {
            console.error("Cannot divide by zero.");
        }
        console.log(`${num1 / num2}`);
    });


program
    .command("joke")
    .description("Random Joke")
    .action(async () => {
        try {
            const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`)
            console.log(res.data.setup)
            console.log(res.data.punchline)


        } catch (err) {
            if (err) {
                console.log(err)
            }

        }
    })

program.parse()


// 1 Random Number
program
    .command("random <min> <max>")
    .action((min, max) => {
        const result =
            Math.floor(Math.random() * (Number(max) - Number(min) + 1)) +
            Number(min);
        console.log(result);
    });

//TIME
program
    .command("time")
    .action(() => {
        console.log(new Date().toLocaleString());
    });

// 3 Uppercase
program
    .command("uppercase <text>")
    .action((text) => {
        console.log(text.toUpperCase());
    });

// 4 Lowercase
program
    .command("lowercase <text>")
    .action((text) => {
        console.log(text.toLowerCase());
    });

// APIS 

//Random Qoute
program
    .command("quote")
    .action(async () => {
        try {
            const res = await axios.get("https://api.quotable.io/random");
            console.log(`"${res.data.content}"`);
            console.log(`- ${res.data.author}`);
        } catch {
            console.log("Could not fetch quote");
        }
    });


//Random Advice
program
    .command("advice")
    .action(async () => {
        try {
            const res = await axios.get("https://api.adviceslip.com/advice");
            console.log(res.data.slip.advice);
        } catch {
            console.log("Could not fetch advice");
        }
    });

