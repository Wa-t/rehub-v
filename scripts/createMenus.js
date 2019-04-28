const fs = require("fs-extra");
const path = require("path");

const handleExtraString = (targetList, filedir) => {
  const list = JSON.parse(`[${targetList}]`);
  const pathList = filedir.split("\\");
  const indexNum = pathList.indexOf("pages");
  const usefulPathList = pathList.slice(indexNum + 1, pathList.length - 1);
  const keyName = usefulPathList.join("/");

  list.forEach(item => {
    item.mpid = keyName.toLowerCase();
    item.route = `${keyName && "/"}${item.mpid}/${item.path}`;
    if (item.mpid.indexOf("/") >= 0) {
      const mpidList = item.mpid.split("/");
      item.mpid = mpidList[mpidList.length - 1];
    }
  });
  return JSON.stringify(list).replace(/\[|\]/g, "");
};

const handleRouter = fullPath => {
  const addList = [];
  const handleRouterCore = fp => {
    const filePath = path.resolve(fp);
    const files = fs.readdirSync(filePath);
    files.forEach(filename => {
      // 获取当前文件的绝对路径
      const filedir = path.join(filePath, filename);
      // 根据文件路径获取文件信息，返回一个fs.Stats对象
      const stats = fs.statSync(filedir);
      const isFile = stats.isFile(); // 是文件
      const isDir = stats.isDirectory(); // 是文件夹
      if (isFile && filename === "router.ts") {
        const fr = fs.readFileSync(filedir, { encoding: "utf-8" });
        const IndexEnum = "default ";
        const index = fr.indexOf(IndexEnum);
        let targetList = fr.substring(index + IndexEnum.length);
        let handledList = [];
        try {
          targetList = targetList
            .replace(/\/\:/g, "/@")
            .replace(/\/\*{1,2}[\s\S]*?\*\//g, "")
            .replace(/\/\/.*/g, "")
            .replace(/\r|\n|\t|\s|\'|\"|;/g, "")
            .replace(/,(?=}|])/g, "")
            .replace(/\[|\]/g, "")
            .replace(
              /([a-zA-Z]+):([@a-zA-Z0-9_\/\-\u4e00-\u9fa5]*)/g,
              (m, $1, $2) => `"${$1}":"${$2}"`
            )
            .replace(/\/@/g, "/:");
          handledList = handleExtraString(targetList, filedir);
          addList.push(handledList);
        } catch (error) {
          console.warn(error);
        }
      } else if (isDir) {
        handleRouterCore(filedir);
      }
    });
  };
  handleRouterCore(fullPath);
  const utilPath = path.resolve("./src/common/utils");
  const utildir = path.join(utilPath, "Menus.ts");
  fs.writeFileSync(
    utildir,
    `/* eslint-disable */\r\nexport const siderMenus = [${addList}];`
  );
};

module.exports = handleRouter;
