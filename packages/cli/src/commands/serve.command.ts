import { Command } from "commander";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description('opens notebook.js or <filename>.js in the browser')
  .option('-p, --port <number>', 'application will run at this port', '4000')
