#!/usr/bin/env node
const CLI_Engine = require('./cliEngine/cli_engine');
const AddCommand = require('./commands/addCommand');
const GreetCommand = require('./commands/greetCommand');
const JokeCommand = require('./commands/jokeCommand');
const SubtractCommand = require('./commands/subtractCommand');
const MultiplyCommand = require('./commands/multiplyCommand');
const DivideCommand = require('./commands/divideCommand');
const RandomCommand = require('./commands/randomCommand');
const TimeCommand = require('./commands/timeCommand');
const UppercaseCommand = require('./commands/uppercaseCommand');
const QuoteCommand = require('./commands/quoteCommand');
const AdviceCommand = require('./commands/adviceCommand');
const CatFactCommand = require('./commands/catFactCommand');
const IpCommand = require('./commands/ipCommand');

const engine = new CLI_Engine();
engine.registerCommands([
    AddCommand,
    GreetCommand,
    JokeCommand,
    SubtractCommand,
    MultiplyCommand,
    DivideCommand,
    RandomCommand,
    TimeCommand,
    UppercaseCommand,
    QuoteCommand,
    AdviceCommand,
    CatFactCommand,
    IpCommand
]);
engine.run();
