function doingSomething( callback: (name:string) => void ): void {
    callback.call(this, ["bruno marques"] );
    callback.apply(this,["bruno marques", "PREFS"] );
    callback("BRUNO AFFONSO");
}

function execute(name: string):void {
    console.log(name);
}

doingSomething( execute );