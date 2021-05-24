#!/usr/bin/env node
const args = require('yargs').argv;
const index = require('./index');
const CommandModel = require('./model/CommandModel');
const cli = async () => {
    let type = args.type;
    let labels = args.labels
    let primaryDataset = args.primarydataset;
    let secondaryDataset = args.secondarydataset;
    let outputFile = args.outputfile;
    let commandModel = new CommandModel(type, labels, primaryDataset, secondaryDataset, outputFile)
    return index.main(commandModel);
};
cli().then(() => {});