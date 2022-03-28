"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const serve_command_1 = require("./commands/serve.command");
commander_1.program.addCommand(serve_command_1.serveCommand);
commander_1.program.parse(process.argv);
