import { program } from "commander";
import { serveCommand } from "./commands/serve.command";

program.addCommand(serveCommand);
program.parse(process.argv);
