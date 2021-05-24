#!/usr/bin/env node
const args = require('yargs').argv;
const index = require('./index');
const CommandModel = require('./model/CommandModel');
const cli = async () => {
    return index.main(new CommandModel(args.type, args.labels, args.dataset, args.output));
};
cli().then(() => {});