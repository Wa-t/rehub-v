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
}
module.exports = CreateMenusPlugin;
