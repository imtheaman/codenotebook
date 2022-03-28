import { Command } from "commander";
import path from "path";
import { serve } from "local-api";

const isProduction = process.env.NODE_ENV === "production";

export const serveCommand = new Command()
  .command("serve [filename]")
  .description("opens notebook.js or <filename>.js in the browser")
  .option("-p, --port <number>", "application will run at this port", "4000")
  .action(
    async (
      filename = "notebook.js",
      options: {
        port: string;
      }
    ) => {
      try {
        const dir = path.join(process.cwd(), path.dirname(filename));
        await serve(
          parseInt(options.port),
          path.basename(filename),
          dir,
          !isProduction
        );
      } catch (error: any) {
        if (error.code === "EADDRINUSE") {
          console.error(
            `Port ${options.port} is in use. Please use another port`
          );
        } else {
          console.error("An error occured", error.message);
        }
        process.exit(1);
      }
    }
  );
