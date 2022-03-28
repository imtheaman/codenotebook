"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveCommand = void 0;
const commander_1 = require("commander");
const path_1 = __importDefault(require("path"));
const local_api_1 = require("local-api");
const isProduction = process.env.NODE_ENV === "production";
exports.serveCommand = new commander_1.Command()
    .command("serve [filename]")
    .description("opens notebook.js or <filename>.js in the browser")
    .option("-p, --port <number>", "application will run at this port", "4000")
    .action((filename = "notebook.js", options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dir = path_1.default.join(process.cwd(), path_1.default.dirname(filename));
        yield (0, local_api_1.serve)(parseInt(options.port), path_1.default.basename(filename), dir, !isProduction);
    }
    catch (error) {
        if (error.code === "EADDRINUSE") {
            console.error(`Port ${options.port} is in use. Please use another port`);
        }
        else {
            console.error("An error occured", error.message);
        }
        process.exit(1);
    }
}));
