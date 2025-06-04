require("./liteloader_api/main.js");
require("./loader_core/plugin_loader.js");
require("./main.js");
const version = LiteLoader.package.qqnt.buildVersion;

if (version < 34467){
    require(require("path").join(process.resourcesPath, "app/app_launcher/index.js"));
}
else {
    require(require("path").join(process.resourcesPath, "app/application.asar/app_launcher/index.js"));
}

setImmediate(() => {
    global.launcher.installPathPkgJson.main = (() => {
        if (version >= 29271) return "./application.asar/app_launcher/index.js";
        if (version >= 28060) return "./application/app_launcher/index.js";
        return "./app_launcher/index.js";
    })();
});