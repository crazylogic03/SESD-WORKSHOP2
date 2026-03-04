#!/usr/bin/env node
const CLI_Engine = require('./cliEngine/cli_engine');
const AddCommand = require('./commands/addCommand')
const GreetCommand = require('./commands/greetCommand')
const JokeCommand = require('./commands/jokeCommand')

const engine = new CLI_Engine();
engine.registerCommands([AddCommand, GreetCommand, JokeCommand]);
engine.run();

