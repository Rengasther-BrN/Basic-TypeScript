function doingSomething(callback) {
    callback.call(this, ["bruno marques"]);
    callback.apply(this, ["bruno marques", "PREFS"]);
    callback("BRUNO AFFONSO");
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
//# sourceMappingURL=callbacktest.js.map