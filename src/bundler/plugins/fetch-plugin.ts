import * as esbuild from "esbuild-wasm";
import axios from "axios";
import localforage from "localforage";

const fileCache = localforage.createInstance({
  name: "fileCache",
});

export const fetchPlugin = (inputCode: string) => {
  return {
    name: "fetch-plugin",
    setup(build: esbuild.PluginBuild) {
      // sets the content of index.js file to something
      build.onLoad({ filter: /(^index\.js$)/ }, () => {
        return {
          loader: "jsx",
          contents: inputCode,
        };
      });

      //  Checks if the files exist in our local indexed db and returns it.
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );

        if (cachedResult) {
          return cachedResult;
        }

        // fetches all the css files and saves it inside the local indexed db
        build.onLoad({ filter: /.css$/ }, async (args: any) => {
          const { data, request } = await axios.get(args.path);
          const escaped = data
            .replace(/\n/g, "")
            .replace(/"/g, '\\"')
            .replace(/'/g, "\\'");

          const contents = `
            const style = document.createElement('style');
            style.innerText = '${escaped}'
            document.head.appenChild(style)
            `;

          const result: esbuild.OnLoadResult = {
            loader: "jsx",
            contents,
            resolveDir: new URL("./", request.responseURL).pathname,
          };
          await fileCache.setItem(args.path, result);
          return result;
        });

        // Fetches all the js files and saves it in the local indexed db
        build.onLoad({ filter: /.*/ }, async (args: any) => {
          const { data, request } = await axios.get(args.path);

          const result: esbuild.OnLoadResult = {
            loader: "jsx",
            contents: data,
            resolveDir: new URL("./", request.responseURL).pathname,
          };

          await fileCache.setItem(args.path, result);
          return result;
        });
      });
    },
  };
};
