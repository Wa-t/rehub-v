const createMenus = require("./createMenus");

const pluginName = "CreateMenusPlugin";

let globalpath = "";

class CreateMenusPlugin {
  constructor(props) {
    globalpath = props.path;
  }
  apply(compiler) {
    compiler.plugin("compilation", function(compilation) {
      // some code here

      compilation.plugin("normal-module-loader", function(
        loaderContext,
        module
      ) {
        //this is where all the modules are loaded
        //one by one, no dependencies are created yet
        if (process.env.NODE_ENV === "production") {
          createMenus(globalpath);
        }
        if (module.resource && module.resource.indexOf("router.ts") >= 0) {
          createMenus(globalpath);
        }
      });
    });
  }
  // apply(compiler) {
  //   console.log(compiler.plugin);
  //   compiler.hooks.entryOption.tap(pluginName, () => {
  //     createMenus(this.options.path);
  //   });
  //   if (process.env.NODE_ENV === "development") {
  //     compiler.hooks.compilation.tap(pluginName, compilation => {
  //       let needCreate = false;
  //       compilation.hooks.buildModule.tap(pluginName, Module => {
  //         if (Module.resource && Module.resource.indexOf("router.js") >= 0) {
  //           needCreate = true;
  //           createMenus(this.options.path);
  //         }
  //       });
  //     });
  //   }
  // }
}
module.exports = CreateMenusPlugin;
